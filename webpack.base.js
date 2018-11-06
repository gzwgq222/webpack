const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: __dirname + '/src/index.js',
  entry: {
    index: __dirname + '/src/index.js',
    two: __dirname + '/src/two.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
    
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader', 'postcss-loader']
        use: ExtractTextPlugin.extract({  // 这里我们需要调用分离插件内的extract方法
          fallback: 'style-loader',  // 相当于回滚，经postcss-loader和css-loader处理过的css最终再经过style-loader处理
          use: ['css-loader', 'postcss-loader'],
          publicPath: '../'
        })
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
      },
      {
        test: /\.(png|jpg|svg|gif)$/,  // 正则匹配图片格式名
        use: [
          {
            loader: 'url-loader',  // 使用url-loader
            options: {
              limit: 1000,
              outputPath: 'images'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究 Gong'),
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: __dirname + '/src/index.html'
    }),
    new ExtractTextPlugin('css/index.css')
  ]
}