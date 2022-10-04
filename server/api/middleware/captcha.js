const https = require('https');
const config = require('../../config');

module.exports = (req, res, next) => {
  try {
    const captchaToken = req.headers['x-captcha'];

    if (!captchaToken) {
      return res.status(400).send('Missing captcha header');
    }

    const request = https.request({
      method: 'POST',
      host: 'hcaptcha.com',
      path: '/siteverify',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }, (result) => {
      const chunks = [];

      result.on('data', (chunk) => {
        chunks.push(...chunk);
      });

      result.on('end', () => {
        let body = Buffer.from(chunks).toString();
        try {
          body = JSON.parse(Buffer.from(chunks).toString());
        } catch {}

        if (body.success) {
          return next();
        }

        console.log('Captcha response error: ' + result.statusCode + ':' + JSON.stringify(body));
        return res.status(400).send('Invalid captcha');
      });
    });

    request.write(`response=${captchaToken}&secret=${config.api.captchaSecret}&sitekey=${config.api.captchaSiteKey}&remoteip=${req.ip}`);
    request.end();
  } catch (err) {
    return res.status(500).send({ err: config.api.defaultErrResponse });
  }
};
