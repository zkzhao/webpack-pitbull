'use strict'
const webpack = require('webpack');
const merge = require('webpack-merge');
const dirPath = require('./dir.path.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig,{
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [{
          loader: "vue-style-loader"
        },{
          loader: "style-loader"
        },{
          loader: "css-loader", options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "vue-style-loader"
        },{
          loader: "style-loader"
        },{
          loader: "css-loader", options: {
            sourceMap: true
          }
        },{
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }]
      }
    ]
  },

  devtool: 'eval-source-map', // 指定source-maps的配置方式

  plugins: [
    new FriendlyErrorsPlugin(), // 控制台错误提示
    new webpack.HotModuleReplacementPlugin(), // 热替换
    new webpack.NamedModulesPlugin(), // HRM 显示模块的相对路径
    new webpack.NoEmitOnErrorsPlugin(), // 在编译出现错误时跳过输出阶段
  ],

  devServer: {
    inline: true, // 可以监控js变化
    hot: true, // 热更新
    open: true,
    compress: true,
    quiet: true, // 控制台错误不可见，使用FriendlyErrorsPlugin打印错误
    proxy: dirPath.serverProxy
  }
});

