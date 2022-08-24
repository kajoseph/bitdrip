const jwt = require('jsonwebtoken');
const { api: config } = require('../../config');


module.exports = {
  attachToken: async (req, res) => {
    try {
      const userTokenPayload = res.data && res.data.token;
      if (userTokenPayload) {
        const token = await jwt.sign(userTokenPayload, config.jwtSecret); // TODO add expiration

        res.data.token = token;
        return res.send(res.data);
      }
      res.send(401);
    } catch (err) {
      res.send(500);
    }
  }
};
