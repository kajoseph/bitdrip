require('dotenv').config();
const db = require('./db');
const config = require('./config');
const faucets = require('./lib/faucets');
let api;

(async function() {
  await db.init();

  for (const [chain, chainConf] of Object.entries(config.wallets)) {
    if (chainConf.disabled) {
      continue;
    }
    console.log('Starting faucet:', chain);
    await faucets[chain].start();
  }
  console.log('Faucets successfully started.');
  console.log('Starting API...');
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
    if (api) {
      console.log('Stopping API...');
      await api.stop();
    }
    for (const [chain, faucet] of Object.entries(faucets)) {
      console.log('Stopping faucet:', chain);
      await faucet.stop();
    }
    db.shutdown();
  } catch (err) {
    console.error('ERROR DURING SHUTDOWN', err);
  }
});
