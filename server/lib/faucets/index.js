const bitcoin = require('./bitcoin');
const bitcoinCash = require('./bitcoinCash');
const dogecoin = require('./dogecoin');
const ethereum = require('./ethereum');
const litecoin = require('./litecoin');
// const polygon = require('./polygon');

module.exports = {
  BTC: bitcoin,
  BCH: bitcoinCash,
  DOGE: dogecoin,
  LTC: litecoin,
  ETH: ethereum,
  // MATIC: polygon
};
