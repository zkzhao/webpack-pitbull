'use strict'
const webpack = require('webpack');
const merge = require('webpack-merge');
const dirPath = require('./dir.path.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              fallback: "vue-style-loader",
              use: [{
                loader: "css-loader",
                options: {
                  minimize: true
                }
              }]
            }),
            scss: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: [
                {
                  loader: "css-loader",
                  options: {
                    minimize: true
                  }
                },
                {
                  loader: "sass-loader"
                }
              ]
            })
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "vue-style-loader",
          use: [{
            loader: "css-loader",
            options: {
              minimize: true
            }
          }]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      }
    ]
  },

  plugins: [
    // 代码压缩
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      parallel: true
    }),
    // 单独使用link标签加载css并设置路径，相对于output配置中的publickPath
    new ExtractTextPlugin(`${dirPath.css}/[name].css`),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: `${dirPath.js}/vendors`,
      filename: "[name]-bundle.js",
      minChunks: 4
    })
  ]
});

