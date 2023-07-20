const { Wallet, CryptoWalletCore: CWC } = require('bitcore-client');
const CryptoRpc = require('crypto-rpc').CryptoRpc;
const config = require('../../config');

class LitecoinFaucet {
  constructor() {
    this.chain = 'LTC';
    this.config = config.wallets[this.chain];
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
      await this.rpc.walletUnlock({ name: config.wallets.BTC.name, passphrase: config.wallets.BTC.walletPassword, time: 1 });
    } else {
      this.wallet = await Wallet.loadWallet({ name: this.config.name });
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
      if (this.rpc) {
        const txid = await this.rpc.unlockAndSendToAddress({ address, amount: amountSats, passphrase: this.config.walletPassword });
        return { txid };
      } else {
        const balance = await this.wallet.getBalance();
        if (balance.confirmed < amount + 1e5) { // 1e5 is a generous estimate of a fee
          return { err: 'Faucet is dry. Please try again later' };
        }
        const feeRate = await this.getFeeRate();

        await this.wallet.unlock(this.config.walletPassword);
        const change = await this.wallet.nextAddressPair();
        await this.wallet.syncAddresses(true);

        const utxos = await this.wallet.getUtxosArray({ includeSpent: false });

        const tx = new CWC.BitcoreLib.Transaction();
        tx.to(address, amountSats);
        tx.change(change[0]);
        tx.feePerByte(feeRate);

        while (tx.inputAmount < tx.outputAmount + tx.getFee()) {
          const utxo = utxos.pop();
          if (!utxo) {
            return { err: 'Faucet is dry. Please try again later' };
          }
          const input = new CWC.BitcoreLib.Transaction.UnspentOutput({
            txid: utxo.mintTxid,
            outputIndex: utxo.mintIndex,
            script: utxo.script,
            satoshis: utxo.value,
            address: utxo.address
          });
          tx.from(input);
        }

        const signedTx = await this.wallet.signTx({ tx: tx.uncheckedSerialize(), passphrase: this.config.walletPassword });
        const broadcastedTx = await this.wallet.broadcast({ tx: signedTx });
        await this.wallet.saveWallet();

        return broadcastedTx;
      }
    } finally {
      this.wallet.lock();
    }
  }

  async getFeeRate() {
    let fee = await this.wallet.getNetworkFee();
    fee = (JSON.parse(fee).feerate || 10000) / 1000; // 10 sats/kB
    return fee;
  }
}

module.exports = new LitecoinFaucet();
