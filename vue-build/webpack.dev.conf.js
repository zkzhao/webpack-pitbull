'use strict'
const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const dirPath = require('./dir.path.js');

module.exports = merge(baseWebpackConfig,{
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  //plugins: configPlugins,

  devServer: {
    inline: true, // 可以监控js变化
    hot: true, // 热更新
    compress: true,
    proxy: dirPath.serverProxy
  }
});

