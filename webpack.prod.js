const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const PurifyCssWebpack = require('purifycss-webpack')       // 引入PurifyCssWebpack插件
const glob = require('glob')                                // 引入glob模块,用于扫描全部html文件中所引用的css

const pro = {
  mode: 'production',
  devtool: 'soure-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new PurifyCssWebpack({
      paths: glob.sync(__dirname + '/src/*.html')
  })
  ]
}
module.exports = merge(base, pro)