const path= require('path');
const glob= require('glob');
const dirPath= require('./dir.path.js');

var configEntry= {};
//遍历入口js文件
const jsFiles= glob.sync(`${dirPath.srcJsDir}/*.js`);
jsFiles.forEach((page)=>{
  let extname= path.extname(page);
  let basename= path.basename(page,extname);
  configEntry[basename]= page;
});

module.exports= configEntry;