const { Wallet } = require('bitcore-client');
const CryptoRpc = require('crypto-rpc').CryptoRpc;
const { wallets: walletConfigs } = require('../../config');

class BaseFaucet {
  constructor({ chain }) {
    this.chain = chain;
    this.config = walletConfigs[chain];
    this.wallet = null;
    this.rpc = null;
    this.started = false;
  }

  async start() {
    if (this.config.rpcHost) {
      this.rpc = new CryptoRpc({
        chain: this.chain,
        host: this.config.rpcHost,
        rpcPort: this.config.rpcPort,
        rpcUser: this.config.rpcUser,
        rpcPass: this.config.rpcPass,
        protocol: this.config.protocol
      }).get(this.chain);
      const locked = await this.rpc.isWalletLocked({ name: this.config.name });
      if (locked && !this.config.walletPassword) {
        throw new Error('Missing `walletPassword` in config. This is needed to unlock bitcoind wallet');
      }
      // Unlock for 1 second to ensure password is valid
      await this.rpc.walletUnlock({ name: this.config.name, passphrase: this.config.walletPassword, time: 1 });
    } else {
      this.wallet = await Wallet.loadWallet({ name: this.config.name, storageType: this.config.storageType });
      // Ensure password is correct
      await this.wallet.unlock(this.config.walletPassword);
      this.wallet.lock();
    }
    this.started = true;
  }

  stop() {}

  async sendTransaction(address, amount) {
    try {
      const amountSats = amount * 1e8;
      let txid;
      if (this.rpc) {
        txid = await this._sendRpcTransaction({ address, amountSats });
      } else if (this.wallet) {
        txid = await this._sendBitcoreTransaction({ address, amountSats });
      } else {
        throw new Error(`No wallet configured for faucet ${this.chain}`);
      }
      return { txid };
    } finally {
      this.wallet?.lock();
    }
  }

  async _sendRpcTransaction({ address, amountSats }) {
    const txid = await this.rpc.unlockAndSendToAddress({ address, amount: amountSats, passphrase: this.config.walletPassword });
    return txid;
  }

  async _sendBitcoreTransaction({ address, amountSats }) {
    const balance = await this.wallet.getBalance();
    if (balance.confirmed < amountSats + 1e5) { // 1e5 is a generous estimate of a fee
      return { err: 'Faucet is dry. Please try again later' };
    }

    const utxos = await this.wallet.getUtxosArray();
    const feeRate = this.getFeeRate();
    const params = {
      feeRate,
      utxos,
      recipients: [{ address, amount: amountSats }]
    };
    const changeIdx = this.wallet.addressIndex;
    params.change = this.wallet.deriveAddress(changeIdx, true);
    const tx = await this.wallet.newTx(params);
    const passphrase = this.config.walletPassword;
    await this.wallet.unlock(passphrase);
    const signedTx = await this.wallet.signTx({ tx, passphrase, changeAddressIdx: changeIdx });
    const transaction = await this.wallet.broadcast({ tx: signedTx });
    return transaction.txid;
  }

  async getFeeRate() {
    let fee = await this.wallet.getNetworkFee();
    fee = (JSON.parse(fee).feerate || 10000) / 1000; // Convert to sats/kB (default to 10 sats/B)
    return fee;
  }
}

module.exports = BaseFaucet;
