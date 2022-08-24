const { Schema, model } = require('../index');


let History = new Schema({
  ip: { type: String },
  address: { type: String },
  ticker: { type: String },
  txid: { type: String },
  timestamp: { type: Date, default: () => new Date() }
});


History = model('History', History);
module.exports = History;
