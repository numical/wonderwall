const path = require('path');
const webpack = require('webpack');
const DEV = 'dev';
const DEBUG = 'debug';

module.exports = (options) => {
  const config = baseConfig(options);
  switch (options) {
    case DEV:
      return Object.assign(config, devConfig(options));
    case DEBUG:
      return Object.assign(config, debugConfig(options));
    default:
      return Object.assign(config, prodConfig(options));
  }
};

function baseConfig (options) {
  return {
    entry: './js/app.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/wonderwall/'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  };
}

function devConfig (options) {
  return {
    devtool: 'cheap-module-eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      hot: true,
      contentBase: './build',
      historyApiFallback: true
    }
  };
}

function debugConfig (options) {
  return {
    devtool: 'source-map'
  };
}

function prodConfig (options) {
  return {
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        comments: false,
        sourceMap: false
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.NoErrorsPlugin()
    ]
  };
}
