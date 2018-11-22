const merge = require('webpack-merge')
const base = require('./webpack.base.js')

const dev = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    inline: true,
    port: '8080',
    contentBase: './dist',
    historyApiFallback: true
  }
}
module.exports = merge(base, dev)