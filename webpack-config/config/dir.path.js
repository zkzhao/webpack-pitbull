const path= require('path');
var DirPath= {};

DirPath.rootDir= path.resolve(__dirname,'../../'); //项目根目录
DirPath.srcDir= path.resolve(DirPath.rootDir,'./app'); //开发环境目录
DirPath.distDir= path.resolve(DirPath.rootDir,'./dist'); //生产环境目录
DirPath.srcAssetsDir= path.resolve(DirPath.srcDir,'./assets'); //开发环境资产目录
DirPath.distAssetsDir= path.resolve(DirPath.distDir,'./assets'); //生产环境资产目录
DirPath.srcJsDir= path.resolve(DirPath.srcAssetsDir,'./scripts'); //开发环境脚本目录
DirPath.distJsDir= path.resolve(DirPath.distAssetsDir,'./scripts'); //生产环境脚本目录

DirPath.js= 'assets/scripts'; //app资产目录相对路径-脚本
DirPath.img= 'assets/images'; //app资产目录相对路径-图片
DirPath.css= 'assets/styles'; //app资产目录相对路径-样式

DirPath.serverProxy= {
  "/api": "http://localhost:8888"
}

module.exports= DirPath;