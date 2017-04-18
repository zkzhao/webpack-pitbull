const path= require('path');
const dirPath= require('./dir.path.js');

module.exports= {
  path: dirPath.distDir,
  publicPath: '/',
  filename: `${dirPath.js}/[name].js`,
  chunkFilename: `${dirPath.js}/[id].bundle.js`
}