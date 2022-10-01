module.exports = {
  api: {
    host: 'example.com',
    port: 3003,
    key: '/home/user/ssl/bitdrip.key',
    cert: '/home/user/ssl/bitdrip.crt'
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
      bitcoreUrl: 'https://api.bitcore.io/api',
      
      // needed whether you're using rpc or bitcore wallet
      network: 'regtest',
      walletPassword: '',
    },
    ETH: {
      name: 'bitdrip_BTC',
      bitcoreUrl: 'https://api.bitcore.io/api',
      walletPassword: '',
      provider: 'url to infura or getblock.io for quering and broadcasting txs'
    },
  },
  contracts: {
    ETH: {
      invoice: '0x0460434b96f641C56b5106C94a2d15Fc98726805',
      GUSD: '0x2a49e9baC43206F98eE42e564CB9baca3D52Fe14',
      USDC: '0xB39a94262132c41405651b2cFA62925Ce8320b3d',
      PAX: '0xf31DdB9d6198f0AA523A7B3E502B440699b4Ed4A',
      BUSD: '0xa32c5570E471368F719cEBEff2A769FC003e2a75',
      DAI: '0x1F21582e69B9faC1EDd35453931bbe955EFD219E',
      WBTC: '0xBa7d153327F0e2335D7E2cF8E91320046d634aE1',
      SHIB: '0xca692110abE79Ac2C907AA60A39ff98332286658',
      APE: '0x0D85d593fa4A64D48fC8B16615C934d045ba7500',
      EUROC: '0xD57211685c14DAecB0f4a1126428574d452Ec41A'
    }
  }
}