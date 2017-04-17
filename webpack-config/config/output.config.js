const path= require('path');
const dirPath= require('./dir.path.js');

module.exports= {
  path: dirPath.distDir,
  publicPath: '/',
  filename: `${dirPath.js}/[name].js`,//'assets/scripts/[name].js',
  chunkFilename: `${dirPath.js}/[id].bundle.js`//'assets/scripts/[id].bundle.js',
}