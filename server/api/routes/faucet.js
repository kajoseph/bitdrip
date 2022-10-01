const express = require('express');
const axios = require('axios');
const { CryptoWalletCore: CWC } = require('bitcore-client');
const db = require('../../db');
const utils = require('../../lib/utils');
const faucets = require('../../lib/faucets');
const config = require('../../config');
const CONSTANTS = require('../../lib/constants');

const app = express();


app.get('/', async function(req, res) {
  try {
    let currencies = await axios.get('https://test.bitpay.com/currencies');
    if (currencies.status !== 200) {
      return res.status(418).send({ err: 'test.bitpay currencies were unavailable' });
    }

    let selectableWallets = await axios.get('https://test.bitpay.com/invoiceData/selectableWallets?returnObject=true');
    if (selectableWallets.status !== 200) {
      return res.status(418).send({ err: 'test.bitpay selectable wallets were unavailable' });
    }
    selectableWallets = selectableWallets.data.data;

    currencies = currencies.data.data.filter(f => !!f.chain && f.code !== 'XRP');
    for (let c of currencies) {
      const wallet = Object.values(selectableWallets).find(wallet => wallet.currencies[c.code]);
      if (!wallet) {
        continue;
      }
      c.image = wallet.currencies[c.code].image;

      if (c.code === 'ETH') {
        c.name = 'Ethereum';
      }
      let strippedCode = c.code;
      if (c.code.indexOf('_') > -1) {
        strippedCode = c.code.substring(0, c.code.indexOf('_'));
        c.image = c.image.replace(c.code, strippedCode);
      }
      if (config.contracts[c.chain] && config.contracts[c.chain][strippedCode]) {
        c.contractAddress = config.contracts[c.chain][strippedCode];
      }
      c.limit = CONSTANTS.FAUCET_LIMITS[strippedCode];
      if (!c.limit) {
        // defaults to EVM limits if it's a native token, otherwise STABLECOIN
        c.limit = c.chain === c.code ? CONSTANTS.DEFAULT_FAUCET_LIMITS.EVM : CONSTANTS.DEFAULT_FAUCET_LIMITS.STABLECOIN;
      }
      const chainUtils = CWC.Transactions.get({ chain: c.chain });
      if (chainUtils && typeof chainUtils.getChainId === 'function' && config.wallets[c.chain]) {
        c.chainId = chainUtils.getChainId(config.wallets[c.chain].network);
      }

      if (config.wallets[c.chain]) {
        c.isConfigured = true;
      } else {
        c.isConfigured = false;
      }
    }

    currencies.sort((a, b) => utils.sortAscending(a.name, b.name));

    return res.send({ data: currencies });
  } catch (err) {
    res.statusCode = 500;
    return res.send({ err: 'an unexpected error ocurred' });
  }
});

app.post('/', async function(req, res) {
  try {
    const { address, amount, ticker } = req.body;
    const coin = ticker.split('_')[0];
    const chain = req.body.chain || coin;

    if (!utils.isValidAddress(chain, address)) {
      return res.status(400).send({ msg: 'Failed address validation' });
    }

    if (isNaN(amount) || !amount || amount < CONSTANTS.FAUCET_LIMITS[coin].min || amount > CONSTANTS.FAUCET_LIMITS[coin].max) {
      return res.status(400).send({ msg: 'Failed amount validation' });
    }

    const alreadyExists = await db.model('History').countDocuments({ $or: [{ ip: req.ip }, { address }], ticker, timestamp: { $gt: Date.now() - 1000 * 60 * 60 * 24 } });
    if (alreadyExists) {
      return res.status(400).send({ msg: 'You\'ve reached your limit for today. Try again in 24 hours' });
    }

    // send it
    const faucet = faucets[chain];
    if (!faucet || !faucet.started) {
      return res.status(400).send({ msg: 'Faucet unavailable right now' });
    }
    const { txid, err } = await faucet.sendTransaction(address, amount, ticker);
    if (err) {
      return res.status(400).send({ msg: err });
    }

    await db.model('History').create({ ip: req.ip, address, txid, ticker });

    return res.send({ data: { amount: amount, txid } });
  } catch (err) {
    res.statusCode = 500;
    return res.send({ err: 'unable to get addresses' });
  }
});


module.exports = app;
