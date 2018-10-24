var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
var path = require('path')
require('babel-polyfill')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    sourceMapFilename: 'index.map'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    ]
  },
  plugins:
    process.env.NODE_ENV !== 'production'
      ? []
      : [
          new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
          })
        ]
}
