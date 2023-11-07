const BaseFaucet = require('./baseFaucet');

class DogecoinFaucet extends BaseFaucet {
  constructor() {
    super({ chain: 'DOGE' });
  }
}

module.exports = new DogecoinFaucet();
