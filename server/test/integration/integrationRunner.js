require('dotenv').config({ path: __dirname + '/../../.env_mocha' });
const Mocha = require('mocha');
const fs = require('fs');
const db = require('../../db');

let mochaOptions = {
  ui: 'bdd',
  reporter: 'spec',
  color: true
};

if (process.argv.indexOf('--timeout') > -1) {
  mochaOptions.timeout = process.argv[process.argv.indexOf('--timeout') + 1];
}

if (process.argv.indexOf('--grep') > -1) {
  mochaOptions.grep = process.argv[process.argv.indexOf('--grep') + 1];
}

(async function() {
  try {
    await db.init('mocha');
    const mocha = new Mocha(mochaOptions);

    const processDir = (path) => {
      const dirItems = fs.readdirSync(path);
      for (let item of dirItems) {
        if (fs.statSync(path + '/' + item).isDirectory()) {
          processDir(path + '/' + item);
        } else if (/\.integration\.js$/gi.test(item)) {
          mocha.addFile(path + '/' + item);
        }
      }
    };

    processDir(__dirname);

    mocha.run((failures) => {
      db.shutdown();
    });
  } catch (err) {
    console.log(err);
  }
})();


process.on('SIGINT', () => {
  db.shutdown();
});
