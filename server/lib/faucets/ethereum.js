const { Wallet, CryptoWalletCore: CWC } = require('bitcore-client');
const config = require('../../config');
const Invoice = require('../../contracts/ETH/Invoice.json');
const ERC20 = require('../../contracts/ETH/GUSD.json'); // GUSD is used here b/c it has the decimals property. The ERC20 contract doesn't have decimals on it.

const Web3 = CWC.Web3;

class EthereumFaucet {
  constructor() {
    this.chain = 'ETH';
    this.config = config.wallets[this.chain];
    this.contracts = config.contracts[this.chain];
    this.web3 = null;
    this.wallet = null;
    this.started = false;
  }

  async start() {
    this.web3 = new Web3(this.config.provider);

    this.wallet = await Wallet.loadWallet({ name: this.config.name });
    // Ensure password is correct
    await this.wallet.unlock(this.config.walletPassword);
    this.wallet.lock();

    // Add any new tokens to the wallet
    for (let [token, address] of Object.entries(config.contracts[this.chain])) {
      if (token === 'invoice') { continue; }

      const walletToken = this.wallet.tokens.find(t => t.symbol == token);
      if (!walletToken || walletToken.address !== address) {
        const decimals = await this.getErc20Decimals(address);
        await this.wallet.addToken({ symbol: token, address, decimals });
      }
    }

    this.started = true;
  }

  stop() {
    if (this.web3?.currentProvider?.connected) {
      console.log(`Disconnecting ${this.chain} web3...`);
      this.web3.currentProvider.disconnect();
    }
  }

  async sendTransaction(address, amount, token) {
    try {
      if (!token || token === this.chain) {
        amount = parseInt(Web3.utils.toWei(amount, 'ether'));
        token = null;
      } else {
        const walletToken = this.wallet.tokens.find(t => t.symbol === token);
        amount = parseInt(amount * Math.pow(10, walletToken.decimals));
      }

      const balance = await this.wallet.getBalance(null, token);

      if (balance.confirmed < amount + 1e5) { // 1e5 is a generous estimate of a fee
        // Ideally we would distribute all of our token holdings before going to the contract so that contract funds are available for ops.
        const { txid } = await this._sweepFromInvoice(token);
        if (txid) {
          // TODO record sweep
        }
        return { err: 'Faucet is dry. Please try again later' };
      }

      await this.wallet.unlock(this.config.walletPassword);

      const feeRate = await this.getFeeRate();
      const nonce = await this.wallet.getNonce();
      const tx = await this.wallet.newTx({
        nonce,
        recipients: [{ address, amount }],
        gasPrice: feeRate,
        token
      });

      const signedTx = await this.wallet.signTx({ tx: tx, passphrase: this.config.walletPassword });
      const broadcastedTx = await this.wallet.broadcast({ tx: signedTx });

      return broadcastedTx;
    } catch (err) {
      if (err.message && err.message.indexOf('connection not open') > -1) {
        this.web3.eth.currentProvider.connect();
        await new Promise(r => this.web3.eth.currentProvider.once('connected', r));
        return await this.sendTransaction(address, amount, token);
      }
      throw err;
    } finally {
      this.wallet.lock();
    }
  }

  async _sweepFromInvoice(token) {
    const invoiceContract = new this.web3.eth.Contract(Invoice.abi, this.contracts.invoice);
    const withdrawal = invoiceContract.methods.withdraw(this.contracts[token] || '0x0000000000000000000000000000000000000000');
    const myAddresses = await this.wallet.getAddresses();
    const feeRate = await this.getFeeRate();
    await this.wallet.unlock(this.config.walletPassword);


    const currentOwner = await invoiceContract.methods.owner().call();
    const currentSigner = await invoiceContract.methods.quoteSigner().call();
    const bpSignerAcct = this.web3.eth.accounts.privateKeyToAccount('5b3dbd6bb875d103c1f0bab315e6d021c70a0d9099770adce6078263555660c8');
    const gethOwnerAcct = this.web3.eth.accounts.privateKeyToAccount('0xf9ad2207e910cd649c9a32063dea3656380c32fa07d6bb9be853687ca585a015');
    const walletKey = await CWC.Deriver.derivePrivateKey(
      this.chain,
      this.config.network,
      this.wallet.unlocked.masterKey,
      0,
      false
    );

    const setOwner = async ({ newOwner, currentOwner }) => {
      const newOwnerAcct = this.web3.eth.accounts.privateKeyToAccount(newOwner);
      const currentOwnerAcct = this.web3.eth.accounts.privateKeyToAccount(currentOwner);
      const setAdmin = invoiceContract.methods.setAdmin(newOwnerAcct.address);
      this.web3.eth.accounts.wallet.add(currentOwnerAcct);
      const gas = await setAdmin.estimateGas({ from: currentOwnerAcct.address });
      const sentTx = await setAdmin.send({ from: currentOwnerAcct.address, gas, gasPrice: feeRate });
      console.log(sentTx);
    };

    if (token) {
      const balance = await this.getErc20InvoiceBalance(token);
      if (balance == 0) {
        // if (currentOwner == myAddresses[0]) {
        //   await setOwner({ newOwner: gethOwnerAcct.privateKey, currentOwner: walletKey.privKey }); // default geth dev acct
        // }
        return {};
      }
    }

    if (currentOwner !== myAddresses[0]) {
      await setOwner({ newOwner: walletKey.privKey, currentOwner: gethOwnerAcct.privateKey });
    }

    const gas = await withdrawal.estimateGas({ from: myAddresses[0] });
    const nonce = await this.wallet.getNonce();
    const tx = await this.wallet.newTx({
      nonce,
      from: myAddresses[0],
      recipients: [{ address: this.contracts.invoice, amount: 0 }],
      data: withdrawal.encodeABI(),
      gasLimit: gas,
      gasPrice: feeRate
    });

    const signedTx = await this.wallet.signTx({ tx: tx, passphrase: this.config.walletPassword });
    const broadcastedTx = await this.wallet.broadcast({ tx: signedTx });

    await setOwner({ newOwner: gethOwnerAcct.privateKey, currentOwner: walletKey.privKey }); // default geth dev acct

    return broadcastedTx;
  }

  async getFeeRate() {
    let fee = await this.wallet.getNetworkFee();
    fee = JSON.parse(fee).feerate;
    return fee;
  }

  async getErc20Decimals(address) {
    try {
      const contract = new this.web3.eth.Contract(ERC20.abi, address);
      const decimals = await contract.methods.decimals().call();
      return decimals;
    } catch (err) {
      if (err) {
        return '2';
      }
      throw err;
    }
  }

  async getErc20InvoiceBalance(token) {
    const contract = new this.web3.eth.Contract(ERC20.abi, this.contracts[token]);
    const balance = await contract.methods.balanceOf(this.contracts.invoice).call();
    return balance;
  }
}

module.exports = new EthereumFaucet();
