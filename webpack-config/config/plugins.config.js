const webpack= require('webpack');
const path= require('path');
const glob= require('glob');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const ExtractTextPlugin= require('extract-text-webpack-plugin');
const dirPath= require('./dir.path.js');

var configPlugins=[
  // 全局shimming
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
  }),
  // 提取公共模块
  new webpack.optimize.CommonsChunkPlugin({
    name: `${dirPath.js}/vendors`,
    filename: "[name]-bundle.js",
    minChunks: 4
  }),
  // 单独使用link标签加载css并设置路径，相对于output配置中的publickPath
  new ExtractTextPlugin(`${dirPath.css}/[name].css`)
];

// 遍历 html template 模板文件
var htmlFiles= glob.sync(`${dirPath.srcDir}/*.html`);
htmlFiles.forEach((page)=>{
  let extname= path.extname(page);
  let basename= path.basename(page,extname);
  // push进webpack.plugins
  configPlugins.push(
    new HtmlWebpackPlugin({
      filename: `${dirPath.distDir}/${basename}.html`,
      template: path.resolve(dirPath.srcDir, `${basename}.html`),
      chunks: [`${dirPath.js}/vendors`,basename]
    })
  );
});

module.exports= configPlugins;