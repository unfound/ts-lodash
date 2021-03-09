const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const resolvePath = dir => path.resolve(__dirname, '..', dir)

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: resolvePath('dist'),
        port: 8060,
        hot: true
    }
})
