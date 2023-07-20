require('dotenv').config();
const db = require('./db');
const config = require('./config');
const faucets = require('./lib/faucets');
let api;

(async function() {
  await db.init();

  for (const [currency, currConf] of Object.entries(config.wallets)) {
    if (currConf.disabled) {
      continue;
    }
    await faucets[currency].start();
  }
  api = require('./api');
})();


process.on('uncaughtException', (err) => {
  console.error('An uncaught exception occurred!!', err);
  process.emit('SIGINT');
});

process.on('unhandledRejection', (err) => {
  console.error('An uncaught rejection occurred!!', err);
  process.emit('SIGINT');
});

process.on('SIGINT', async () => {
  setTimeout(() => {
    console.log('Force shutting down. Check that you are closing all connections on SIGINT');
    process.exit(1);
  }, 10000).unref();

  try {
    await api.stop();
    for (const faucet of Object.values(faucets)) {
      await faucet.stop();
    }
    db.shutdown();
  } catch (err) {
    console.error('ERROR DURING SHUTDOWN', err);
  }
});
