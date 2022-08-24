const path = require('path');
const fs = require('fs');
const prodConfig = require('./webpack.config.prod');


module.exports = {
  ...prodConfig,
  mode: 'development',
  devServer: {
    port: 9000,
    compress: true,
    https: {
      key: fs.readFileSync('/home/kjoseph/.bp/ssl/lbitpay.com.key'),
      cert: fs.readFileSync('/home/kjoseph/.bp/ssl/lbitpay.com.crt')  
    },
    host: 'kjoseph.bp',
  },
  devtool: 'inline-source-map',
  externals: {
    ...prodConfig.externals,
  }
};
