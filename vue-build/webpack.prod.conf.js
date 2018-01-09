'use strict'
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const dirPath = require('./dir.path.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig= merge(baseWebpackConfig, {
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
          fallback: "style-loader",
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
          fallback: 'style-loader',
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
    // 作用域提升
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // 所有被依赖的模块，如果它在node_modules目录中，都会被抽离出来放进 vendor.js 中
        // 如果模块有一个路径，而且在路径中有 js 文件，并且这个模块是属于 node_modules 中的模块
        // 那这个模块就会被抽离出来，放进名为 vendor 的这个chunk
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // 提取清单，防止hash更新
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    // 提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      //name: `${dirPath.js}/app`,
      name: "app",
      async: "vendor-async",
      children: true,
      minChunks: 3
    })
  ]
});

if (dirPath.bundleAnalyzerReport) {
  // 分析打包后的文件大小以及依赖
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

// 遍历 html template 模板文件
var htmlFiles = glob.sync(`${dirPath.srcDir}/*.html`);
htmlFiles.forEach((page) => {
  let extname = path.extname(page);
  let basename = path.basename(page, extname);
  // push进webpack.plugins
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${dirPath.distDir}/${basename}.html`,
      template: path.resolve(dirPath.srcDir, `${basename}.html`),
      inject: true,
      chunks: [`${dirPath.js}/vendors`, basename],
    })
  );
});

module.exports = webpackConfig;