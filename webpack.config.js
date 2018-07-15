const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: 'production',
    entry: path.join(__dirname, 'server/src/index.js'),
    output: {
      path: path.join(__dirname, 'server/dist'),
      filename: 'index.js',
      libraryTarget: 'commonjs2',
      publicPath: '/'
    },
    target: 'node',
    node: {
      __dirname: false
    },
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: /(node_modules|bower_components)/,
          use: ['babel-loader']
        }
      ]
    }
  },
  {
    mode: 'production',
    entry:  path.join(__dirname, "client/src/index.js"),
    output: {
      path: path.join(__dirname, "client/dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: /(node_modules|bower_components)/,
          use: ['babel-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'client/public/index.html'),
        inject: true
      })
    ]
  }
]
