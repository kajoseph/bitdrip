const crypto = require('crypto');
const CWC = require('crypto-wallet-core');
const { ObjectId } = require('../db');

const key = crypto.scryptSync('Ge1#2l94trFf7YqN', 'salt', 32);

const utils = {
  hashString: (str) => {
    const hasher = crypto.createHash('sha512');
    hasher.update(str);
    return hasher.digest('base64');
  },

  isValidDate: (date) => {
    const dt = new Date(date);
    if (dt.toString() === 'Invalid date') {
      return false;
    }
    return true;
  },

  encryptId: (id) => {
    if (id._id instanceof ObjectId) {
      id = id._id;
    }
    const cipher = crypto.createCipheriv('aes-256-gcm', key, '24');
    let result = cipher.update(id.toString(), 'utf8', 'hex');
    result += cipher.final('hex');
    return result;
  },

  decryptId: (id) => {
    const decipher = crypto.createDecipheriv('aes-256-gcm', key, '24');
    let result = decipher.update(id, 'hex', 'utf-8');
    // result += decipher.final('utf-8');
    return result;
  },

  compareUrlTemplate: (url, template) => {
    const root = url.split('?')[0].toLowerCase();
    const rootParts = root.split('/');
    const parts = template.toLowerCase().split('/');

    if (rootParts.length !== parts.length) {
      return false;
    }

    for (let i in rootParts) {
      if (rootParts[i] !== parts[i] && parts[i][0] !== ':') {
        return false;
      }
    }
    return true;
  },

  /**
   * Generate a random number between (min, max]
   * @param {*} min
   * @param {*} max
   */
  randomNumber: (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  },


  /**
   * Sorting function to conveniently pass into an array .sort function.
   * @param {*} a
   * @param {*} b
   */
  sortAscending: (a, b) => {
    if (a > b) { return 1; } else if (a < b) { return -1; } else { return 0; }
  },

  /**
   * Sorting function to conveniently pass into an array .sort function.
   * @param {*} a
   * @param {*} b
   */
  sortDescending: (a, b) => {
    if (a > b) { return -1; } else if (a < b) { return 1; } else { return 0; }
  },


  /**
   * Make the execution wait/sleep for timeMs number of milliseconds
   * @param {*} timeMs Time in milliseconds to sleep
   */
  sleep: (timeMs) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeMs);
    });
  },

  isValidAddress: (chain, address) => {
    try {
      switch (chain) {
        case 'BTC':
          return CWC.BitcoreLib.Address.fromString(address);
        case 'BCH':
          return CWC.BitcoreLibCash.Address.fromString(address);
        case 'DOGE':
          return CWC.BitcoreLibDoge.Address.fromString(address);
        case 'LTC':
          return CWC.BitcoreLibLtc.Address.fromString(address);
        case 'ETH':
        case 'MATIC':
        default:
          return CWC.Web3.utils.isAddress(address);
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  },

  getChainFromTicker: (ticker) => {
    return ticker;
  }
};

module.exports = utils;
