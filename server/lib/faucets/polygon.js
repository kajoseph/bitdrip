const { EthereumFaucetClass } = require('./ethereum');


class PolygonFaucet extends EthereumFaucetClass {
  constructor() {
    super({ chain: 'MATIC' });
  }
}

module.exports = new PolygonFaucet();
