const express = require('express');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const { api: config } = require('../config');

const app = express();

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Request-Method', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  next();
});
app.use(cors({
  origin: `https://${config.host}:9000`
}));

// Routing
// const authExceptions = {
//   user: [{ methods: ['POST'], url: '/user/login' }, { methods: ['POST'], url: '/user/register' }],
//   funding: []
// };
app.use('/faucet', require('./routes/faucet'));


// Listening
const server = https.createServer({
  key: fs.readFileSync(config.key, 'utf8'),
  cert: fs.readFileSync(config.cert, 'utf8')
}, app);
server.listen(config.port, config.host, function() {
  console.log('Listening at https://' + config.host + ':' + config.port);
});
