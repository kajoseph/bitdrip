const BaseFaucet = require('./baseFaucet');

class BitcoinCashFaucet extends BaseFaucet {
  constructor() {
    super({ chain: 'BCH' });
  }
}

module.exports = new BitcoinCashFaucet();
