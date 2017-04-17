const path= require('path');
const dirPath= require('./dir.path.js');

module.exports= {
  extensions: ['.js', 'css', 'scss'],
  alias: {
    "Utils": path.join(dirPath.srcJsDir, 'libs' ,'Utils.js'),
  }
}
