const BaseFaucet = require('./baseFaucet');

class LitecoinFaucet extends BaseFaucet {
  constructor() {
    super({ chain: 'LTC' });
  }
}

module.exports = new LitecoinFaucet();
