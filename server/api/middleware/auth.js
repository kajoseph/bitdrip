const jwt = require('jsonwebtoken');
const utils = require('../../utils');
const { api: config } = require('../../config');

module.exports = (exceptions = []) => (req, res, next) => {
  try {
    req.authenticated = false;
    // const exceptions = [
    //   { methods: ['POST'], url: '/user/login' },
    //   { methods: ['POST'], url: '/user/register' },
    //   { methods: ['GET'], url: '/poll/public' },
    //   { methods: ['GET'], url: '/poll', custom: () => !req.headers.authorization },
    // ];

    if (!req.headers.authorization) {
      for (let e of exceptions) {
        if (
          e.methods.includes(req.method) &&
          utils.compareUrlTemplate(req.originalUrl, e.url) &&
          (!e.custom || e.custom())
        ) {
          return next();
        }
      }
      return res.send(401);
    }

    try {
      const token = (req.headers.authorization || '').replace('Bearer ', '');
      const payload = jwt.verify(token, config.jwtSecret, { algorithms: ['HS256'] });
      req.authenticated = true;
      req.auth = payload;
      req.auth.userId = utils.decryptId(req.auth.userId);
      return next();
    } catch (err) {
      console.log(err);
    }

    return res.send(401);
  } catch (err) {
    return res.send(500);
  }
};
