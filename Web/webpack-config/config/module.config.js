const dirPath= require('./dir.path.js');

module.exports= {
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
      use:[{
        loader: 'html-loader',
        options: {
          minimize: true,
          interpolate: 'require' //用于模板插值
        }
      }]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      include: dirPath.srcDir,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }
  ]
}