module.exports = {
  api: {
    host: 'example.com',
    port: 3003,
    key: '/home/user/ssl/bitdrip.key',
    cert: '/home/user/ssl/bitdrip.crt',
    catpchaSecret: 'hcaptcha secret',
    captchaSiteKey: 'hcaptcha site key'
  },
  database: {
    connect: 'localhost:27017'
  },
  wallets: {
    BTC: {
      // For wallet over RPC
      rpcHost: 'localhost',
      rpcPort: 8332,
      rpcUser: 'user',
      rpcPass: 'password',
      protocol: 'http',

      // Bitcore-client wallet
      name: 'bitdrip_BTC',
      storageType: 'Level',
      bitcoreUrl: 'https://api.bitcore.io/api',
      
      // needed whether you're using rpc or bitcore wallet
      network: 'regtest',
      walletPassword: '',
    },
    ETH: {
      name: 'bitdrip_BTC',
      bitcoreUrl: 'https://api.bitcore.io/api',
      walletPassword: '',
      provider: 'url to infura or getblock.io for quering and broadcasting txs',
      invoiceContract: 'invoice contract address',
    },
  }
}