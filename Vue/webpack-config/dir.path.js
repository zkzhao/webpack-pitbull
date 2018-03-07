const path= require('path');
var DirPath= {};
DirPath.rootDir= path.resolve(process.cwd()); //项目根目录
DirPath.srcDir= path.resolve(DirPath.rootDir,'./Vue/app'); //开发环境 目录
DirPath.distDir= path.resolve(DirPath.rootDir,'./Vue/dist'); //生产环境 目录
DirPath.srcAssetsDir= path.resolve(DirPath.srcDir,'./assets'); //开发环境 资产目录
DirPath.distAssetsDir= path.resolve(DirPath.distDir,'./assets'); //生产环境 资产目录
DirPath.srcViewsDir= path.resolve(DirPath.srcDir, './views'); //开发环境 页面目录
DirPath.distViewsDir= path.resolve(DirPath.distDir, './views'); //生产环境 页面目录
DirPath.srcJsDir= path.resolve(DirPath.srcAssetsDir,'./scripts'); //开发环境 脚本目录
DirPath.distJsDir= path.resolve(DirPath.distAssetsDir,'./scripts'); //生产环 境脚本目录

DirPath.js= 'assets/scripts'; //app资产目录相对路径-脚本
DirPath.img= 'assets/images'; //app资产目录相对路径-图片
DirPath.css= 'assets/styles'; //app资产目录相对路径-样式

DirPath.serverProxy= {
  "/api": "192.168.10.1"
}

// 编译后弹出报表页面
DirPath.bundleAnalyzerReport= false;

module.exports= DirPath;