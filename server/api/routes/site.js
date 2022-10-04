const express = require('express');
const config = require('../../config');

const app = express();

app.get('/', (req, res) => {
  try {
    return res.send({
      data: {
        apiHost: config.api.host,
        apiPort: process.env.NODE === 'development' ? config.api.port : null,
        captchaSiteKey: config.api.captchaSiteKey
      }
    });
  } catch (err) {
    return res.status(500).send({ err: config.api.defaultErrResponse });
  }
});

module.exports = app;
