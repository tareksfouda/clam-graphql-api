var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
var path = require('path')

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "index.js",
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
                    presets: ['env']
                }
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            }
        ]
    },
    plugins: (process.env.NODE_ENV !== 'production') ? [] : [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
        })
    ]
}