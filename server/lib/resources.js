const axios = require('axios').default;

async function getCurrencies() {
  let currencies = await axios.get('https://test.bitpay.com/currencies');
  if (currencies.status !== 200) {
    return;
  }
  return currencies.data.data;
}

async function getSelectableWallets() {
  const selectableWallets = await axios.get('https://test.bitpay.com/invoiceData/selectableWallets?returnObject=true');
  if (selectableWallets.status !== 200) {
    return;
  }
  return selectableWallets.data.data;
};

module.exports = {
  getCurrencies,
  getSelectableWallets
};
