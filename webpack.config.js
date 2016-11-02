const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devServer: {
    hot: true,
    contentBase: './build'
  }
};
