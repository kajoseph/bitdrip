const constants = require('../../constants');
const utils = require('../../utils');

module.exports = {
  generateKrakenTxid: function() {
    const generateSection = function(sectionLen) {
      let sectionStr = '';

      const hasDigit = (Math.random() * 10).toFixed(0) % 2;
      const digitLoc = utils.randomNumber(0, sectionLen);
      for (let i = 0; i < sectionLen; i++) {
        if (hasDigit && i === digitLoc) {
          sectionStr += utils.randomNumber(0, 10).toFixed(0);
        } else {
          const j = constants.ALPHABET[utils.randomNumber(0, constants.ALPHABET.length)];
          sectionStr += j.toUpperCase();
        }
      }
      return sectionStr;
    };

    let result = 'T';
    result += generateSection(5);
    result += '-';
    result += generateSection(5);
    result += '-';
    result += generateSection(6);

    // 'T4GTSB-CX4NR-DCJWJV'
    return result;
  }
};
