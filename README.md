# 使用说明
本工程模板是基于Vue-cli构建，因此无需自己考虑webpack升级的事情，只需要跟官方版本升级即可。这样可以节约大量工时。

eslint配置采用vue-cli默认配置。

```
|-- public 
    |-- favicon.ico
    |-- index.html // 模板文件
|-- src
    |-- api    // 用于放置ajax接口请求的文件
    |-- common // utils工具类
        |-- utils.js
        |-- string.js
        |-- date.js
    |-- assets // 用于放置需要打包的静态文件。但是推荐放在public目录下的static文件夹下，可以避免由于打包内容过多造成打包时间太长。
    |-- components // UI基础组件
        |-- XXXCmp // UI组件目录
            |-- index.vue
        |-- XXXCmp.vue // UI组件文件
        |-- xxxx.js // Dom组件
    |-- fragments // 通用业务组件
        |-- XXXFrag
            |-- index.vue
        |-- index.js
    |-- layouts // UI布局文件
        |-- layout1.vue // 布局
    |-- route // 路由配置文件
        |-- module1 // 模块路由配置
        index.js
    |-- store // store信息，以及actions中包含各种业务逻辑
        |-- modules
            |-- module1
                |-- actions.js
                |-- getters.js
                |-- mutations.js
                |-- state.js
                |-- index.js
            |-- module2
                |-- actions.js
                |-- getters.js
                |-- mutations.js
                |-- state.js
                |-- index.js
            |-- index.js
        |-- index.js
        |-- actions.js
        |-- getters.js
        |-- state.js
        |-- mutations.js
    |-- styles // 全局样式
        |-- var.less
    |-- views // 模块页面文件
        |-- modules1
            |-- widgets
                |-- XXXWidg
                    |-- index.vue
                |-- XXXWidg.vue
            |-- index.vue
        |-- modules2
            |-- widgets
                |-- XXXWidg
                    |-- index.vue
                |-- XXXWidg.vue
            |-- index.vue
        |-- app.vue
    |-- main.js // 程序入口
|-- env       // 开发环境变量配置文件，需要以VUE_APP开头
|-- env.alpha // 测试环境配置文件
|-- env.analysis // 用于对打包结果进行打包分析
|-- env.production // 用于构建生产环境的环境变量
|-- vue.config.js // 与vue-cli相同
|-- babel.config.js // babel的构建配置
```

*Note*： 在该模板中，将页面的所有业务逻辑放入了action中，从而起到业务，视图分离的目的。

## Changelog
2019-11-11 针对目录结构和Demo代码进行了重构，发现之前的方式不够细，并且用法存在一些个人的固执。目前将目录进一步细化，并且拿掉了自己封装的actionProxy以适应大多数人的开发习惯
