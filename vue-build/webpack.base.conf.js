'use strict'
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const dirPath = require('./dir.path.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


var configEntry = {};
//遍历入口js文件
const jsFiles = glob.sync(`${dirPath.srcJsDir}/*.js`);
jsFiles.forEach((page) => {
  let extname = path.extname(page);
  let basename = path.basename(page, extname);
  configEntry[basename] = page;
});


// 遍历 html template 模板文件
var configPlugins = [];
var htmlFiles = glob.sync(`${dirPath.srcDir}/*.html`);
htmlFiles.forEach((page) => {
  let extname = path.extname(page);
  let basename = path.basename(page, extname);
  // push进webpack.plugins
  configPlugins.push(
    new HtmlWebpackPlugin({
      filename: `${dirPath.distDir}/${basename}.html`,
      template: path.resolve(dirPath.srcDir, `${basename}.html`),
      inject: true,
      chunks: [`${dirPath.js}/vendors`, basename]
    })
  );
});

module.exports = {
  entry: configEntry,

  output: {
    path: dirPath.distDir,
    publicPath: '/',
    filename: `${dirPath.js}/[name].js`,
    chunkFilename: `${dirPath.js}/[id].bundle.js`
  },

  resolve: {
    extensions: ['.js', '.vue' ,'json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': dirPath.srcDir,
      'Utils': path.join(dirPath.srcJsDir, 'libs', 'Utils.js')
    }
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        include: dirPath.srcDir,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: `${dirPath.img}/[name].[ext]`
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader: 'file-loader',
        options: {
          name: `${dirPath.css}/fonts/[name].[ext]`
        }
      },
      {
        test: /\.html$/,
        include: dirPath.srcDir,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.js$/,
        include: dirPath.srcDir,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
          options: {
            presets: ['env'],
            plugins: ['transform-runtime']
          }
        }
      }
    ]
  },

  plugins: configPlugins
}