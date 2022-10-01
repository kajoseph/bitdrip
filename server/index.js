require('dotenv').config();
const db = require('./db');
const config = require('./config');
const faucets = require('./lib/faucets');

(async function() {
  await db.init();

  for (let [currency, currConf] of Object.entries(config.wallets)) {
    if (currConf.disabled) {
      continue;
    }
    await faucets[currency].start();
  }
  require('./api');
})();


process.on('uncaughtException', (err) => {
  console.error('An uncaught exception occurred!!', err);
  process.emit('SIGINT');
});

process.on('unhandledRejection', (err) => {
  console.error('An uncaught rejection occurred!!', err);
  process.emit('SIGINT');
});

process.on('SIGINT', () => {
  db.shutdown();
  setTimeout(() => {
    console.log('Force shutting down. Check that you are closing all connections on SIGINT');
    process.exit(0);
  }, 5000).unref();
});
