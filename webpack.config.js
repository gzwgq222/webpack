// webpack.config.js   没有分离配置
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
    
  },
  devServer: {
    contentBase: './dist/',
    port: '8888',
    inline: true,
    historyApiFallback: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)/,
        use: {
          loader: 'babel-loader'
          // options: {
          //   presets: ['env', 'react'] webpack会自动调用.babelrc中的babel配置项
          // }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究 Gong'),
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: __dirname + '/src/index.html'
    }),
    new cleanWebpackPlugin(['dist'])
  ]
}