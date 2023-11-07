const BaseFaucet = require('./baseFaucet');

class BitcoinFaucet extends BaseFaucet {
  constructor() {
    super({ chain: 'BTC' });
  }
}

module.exports = new BitcoinFaucet();
