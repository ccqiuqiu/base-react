这是一个适用于移动端的react基础项目，项目封装了目前开发一个移动端项目需要的主流技术和功能。使用高度模块化的目录结构和代码组织，可极大的提升开发效率。

![](https://img.shields.io/badge/react-15.6.2-60dafb.svg)
![](https://img.shields.io/badge/redux-3.7.0-red.svg)
![](https://img.shields.io/badge/reacrRouter-4.2.2-blue.svg)
![](https://img.shields.io/badge/reduxSaga-0.15.4-4183c4.svg)

# 主要技术栈
- react
- react-router
- redux
- immutable
- redux-saga
- rc-form
- axios
- ant-mobile2
- webpack3

# 需要环境
node.js > 6.10

# 命令
```
npm run dev    #开发
npm run build  #发布
```

#目录结构和说明

```
├─ build                              # webpack打包配置项目录
├─ config                             # 项目配置文件目录
├─ dist                               # build发布目录
├─ src                                # 程序源文件目录
│   ├─ App.jsx                       # 应用主视图
│   ├─ main.js                       # 程序入口
│   ├─ assets                        # 公共资源目录（公用的js、css、图片等）
│   │   ├── css                      # 公共样式目录
│   │   ├── img                      # 图片目录
│   │   ├── js                       # 工具类js、全局js方法
│   ├─ conmponents                   # 公共组件、业务无关组件
│   ├─ conn                          # 网络请求统一出口
│   ├─ router                        # Redux相关文件目录
│   ├─ router                        # Redux相关文件目录
│   │   ├── rootRoutes.js           # 组合所有子模块的路由
│   │   ├── RouteWithSubRoutes.js   # 可递归嵌套的路由组件
│   ├─ store                         # Redux相关文件目录
│   │   ├── configureReducers.js     # 组合模块的Reducer
│   │   ├── configureStore.dev.js   # 开发环境的store配置
│   │   ├── configureStore.js       # 创建store
│   │   ├── configureStore.prod.js  # 生产环境的store配置
│   │   ├── createdReducer.js       # 模块用于创建reducer的工具方法
│   │   ├── index.js                # 导出store和运行saga
│   │   ├── middlewares.js          # 单独管理redux中间件
│   │   └── reducerRegistry.js      # 注册分模块的redux
│   └─ module                        # 业务模块目录
│       ├── common                  # 公共模块
│       └── demo1                   # 模块1目录
│           ├── api.js              # 网络请求的api方法
│           ├── routers.js           # 模块的路由配置
│           ├── routers.js           # 导出模块的saga、reducers用于子模块的注册
│           ├── view                # 模块的React组件目录
│           ├── model               # 模块的model目录（action、reducer、saga）
│           └── res                 # 模块使用的静态资源（css,图片等）
└─ static                           # 静态资源目录，此目录的文件会在打包时复制到发布的目录
└─ test                             # 测试
```

# 功能说明

## immutable
使用immutable结合redux，提高react的渲染效率，防止过度的重复渲染。

## 分模块异步加载
将异步路由和redux异步加载结合，真正意义上实现了模块分离。只有在访问到模块下的组件时，才会加载该组件和相关的redux、action、reducer、model、saga，减小首屏加载的js文件大小。

## css预处理器支持
支持postcss、less、sass、stylus默认使用postcss+less

## 高清适配
- 加入使用移动端高清适配方案，默认以750px（2倍屏）设计稿为基础。如设计稿是150px，那么直接写1.5rem
- 通过postcss-pxtorem插件实现像素转rem，以兼容以px为单位的ui库(ant-mobile2是一倍屏适配的)

## 其他功能
- 加入autoprefixer插件，不用手动加浏览器前缀
- 统一增加网络请求和相应的拦截器，可以再拦截器里面实现统一的逻辑，如异常处理、功能参数处理、权限、loading等
- 使用rc-form做了表单封装和验证
- router的跳转封装了一个公共的类，可用于混合app的路由跳转处理
- 默认使用flex.css布局
- 全部es6语法，代码更整洁
- 通过装饰器封装页头标题，操作按钮和页面底部菜单的变化
- react-router4使用官方的无限嵌套路由，在demo里面略显臃肿，但是项目功能增多，模块增多能非常方便扩展
- 有些看起来意义好像不大的代码都是为后期扩展做准备

# 其他项目
- [base-react](https://github.com/ccqiuqiu/base-react) 一个react项目框架 
- [base-vue](https://github.com/ccqiuqiu/base-vue) 一个vue项目框架 
- [base-api](https://github.com/ccqiuqiu/base-api) 一个基于koa2的后台api项目
- [F.List](https://github.com/ccqiuqiu/F.List) 一个包含待办、备忘、密码本功能的android项目
- [F.Money](https://github.com/ccqiuqiu/F.Money) 一个包含流水、借贷、图表统计的多账户、多用户记账的android项目
- [F.Time](https://github.com/ccqiuqiu/F.Time) 一个包含闹钟、提醒、进度条的android项目

# 计划
- 一个基于react + mbox的项目框架
- 一个基于koa + mongodb的后台API项目
- 一个基于react + rxjs + redux-observable 的项目框架
- 一个angular项目框架
