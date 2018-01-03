# webpack-pitbull

## 使用说明
- 安装node所需依赖
`$ npm install`

- 启动调试模式
`$ npm start`

- 开发环境编译
`$ npm run dev`

- 生产环境编译
`$ npm run prod`

- Vue启动调试服务器
`$ npm run vue`

- Vue生产环境编译
`$ npm run vuebuild`

## 目录结构说明
	├─app # 开发环境代码、资源
	│   ├─assets # 资产文件夹
	│   │   ├─images # 存放图片
	│   │   ├─scripts # 存放入口脚本
	│   │   └─styles # 存放样式
	│   ├─tpls # 模板文件夹
	│   └─*.html # html页面文件
	├─dist # 生产环境代码、资源
	├─node_modules
	├─webpack-config # 存放所有webpack配置文件
	│   ├─config # 存放拆分开的配置文件
	│   │   ├─dir.path.js # 统一管理所有的路径地址
	│   │   ├─entry.config.js # 入口配置
	│   │   ├─module.config.js # 公用模块配置
	│   │   ├─module.dev.config.js # 依赖公用模块的开发环境模块配置
	│   │   ├─module.prod.config.js # 依赖公用模块的生产环境模块配置
	│   │   ├─output.config.js # 出口配置
	│   │   ├─plugins.config.js # 公用插件配置
	│   │   ├─plugins.dev.config.js # 依赖公用插件的开发环境插件配置
	│   │   ├─plugins.prod.config.js # 依赖公用插件的开发环境插件配置
	│   │   └─resolve.config.js # 解析配置
	│   ├─webpack.config.js # 生产环境的webpack配置文件
	│   └─webpack.config.js # 开发环境的webpack配置文件
	├─vue-build # 存放编译VUE的webpack配置文件
	├─package.json
	└─README.md # 说明文档