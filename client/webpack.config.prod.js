const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ProvidePlugin } = require('webpack');


module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bitdrip.bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    fallback: {
      http: false,
      https: require.resolve('https-browserify'),
      url: require.resolve('url/'),
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          configFile: false,
          presets: ['babel-preset-solid']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        exclude: /node_modules/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  externalsType: 'script',
  externals: {
    // dwolla: ['https://cdn.dwolla.com/1/dwolla.min.js', 'dwolla']
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'public/favicon.ico',
      title: 'BitDrip: Testnet Faucet by BitPay'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/', to: 'public/', toType: 'dir' }
      ]
    }),
    new ProvidePlugin({
      process: 'process/browser'
    }),
    new ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    })
  ]
};
