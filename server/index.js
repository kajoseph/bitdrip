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
});

// process.on('unhandledRejection', (err) => {
//   console.error('An uncaught rejection occurred!!', err);
// });

process.on('SIGINT', () => {
  db.shutdown();
  process.exit(0);
});
