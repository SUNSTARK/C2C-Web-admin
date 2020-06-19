# C2C-Web-admin
C2C众包项目Web端后台
🏠[github在线预览](https://sunstark.github.io/C2C-Web-admin/dist/#) (速度较慢)
🏠[gitee在线预览](http://sunstark.gitee.io/c2c-web-admin/#) (速度较快)

## 更新日志
### v1.4
1. 重构登录界面，修改layout的部分样式
2. 优化router权限路由逻辑
3. 引入axios模块，未测试
4. 优化echart自适应及其部分显示效果
5. 任务大厅新增点击行展开操作，新增下架二次确认提示

### v1.3
1. 侧栏NavMenu改为路由动态生成
2. 面包屑导航改为路由动态生成
3. 删除前台相关组件
4. 新增NavMenu二级菜单
5. 优化部分显示效果

### v1.2
1. 新增标签页icon图标
2. 新增面包屑导航指引
3. 新增404页面

## 目录结构
```bash
|-- README.md 说明文档
|-- package.json 依赖库配置
|-- static 放置静态文件
|-- src 源代码
|   |-- App.vue 页面主容器
|   |-- assets 资源文件
|   |-- |-- iconfont 部分图标库
|   |-- components 一些公用的组件
|   |-- |-- ECharts ECharts相关组件
|   |-- |-- userFrom 用户表单
|   |-- main.js vue 入口以及 vue 根实例
|   |-- pages 放置页面组件
|   |-- |-- home 主页模块
|   |-- |-- layout 导航模块
|   |-- |-- login 登录模块
|   |-- |-- notFound 404页面
|   |-- |-- table 一些表格模板
|   |-- app app 目录，放置全局的文件
|   |-- |-- apis 封装的 api 目录
|   |-- |-- modules 封装数据的模块
|   |-- |-- |-- functions 全局函数，已挂载到$fn
|   |-- router vue-router 配置
|   |--store 全局状态管理目录
|-- vue.config.js 打包和跨域配置
```
## 注意事项
```bash
# 安装依赖
yarn install

# 启动服务
yarn start

# 打包发布
yarn build
```
