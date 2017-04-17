const dirPath= require('./config/dir.path.js');

module.exports= {
  entry: require('./config/entry.config.js'),

  output: require('./config/output.config.js'),

  module: require('./config/module.dev.config.js'),

  plugins: require('./config/plugins.dev.config.js'),

  resolve: require('./config/resolve.config.js'),

  devServer: {
    inline: true, // 可以监控js变化
    hot: true, // 热更新
    compress: true,
    proxy: dirPath.serverProxy
  }
}