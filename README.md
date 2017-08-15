# node-mock
mock server with using node

# directory
```
|-root                                  // 根目录
  |-config                              // 配置文件
    |-controller.config.js              // 加载控制器文件夹，配置路由
  |-controller                          // 控制器文件夹
    |-moduleName                        // 控制器模块
      |-module.controller.js            // 具体控制器（操作数据库，业务逻辑处理，定义路由）
  |-middleware                          // 中间件
    |-mock                              // mock数据
      |-moduleName                      // 模块名
        |-module.mock.js                // 具体模块的mock数据（数据+路由）
  |-app.js                              // APP入口
```

# version
## v0.0.1
* 定义路由
    * 跨域
    * 判断Method，接收参数(query, body)
    * 返回数据
* 中间件
    * mock