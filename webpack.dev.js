const merge = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    open: true,
    contentBase: './dist',
    port: '8080',
    inline: true,
    historyApiFallback: true,
    hot: true
  }
})
