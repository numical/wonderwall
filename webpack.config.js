const path = require('path');
const webpack = require('webpack');
const DEV = 'dev';

module.exports = (options) => {
  const config = baseConfig(options);
  return (DEV === options)
    ? Object.assign(config, devConfig(options))
    : Object.assign(config, prodConfig(options));
};

function baseConfig (options) {
  return {
    entry: './app.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
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
      contentBase: './build'
    }
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
