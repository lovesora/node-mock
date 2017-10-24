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

# node api测试使用方式
node版本需要>7.6

node更新方式
```bash
# 清除node.js的cache：
$ sudo npm cache clean -f

# 安装 n 工具，这个工具是专门用来管理node.js版本的
$ sudo npm install -g n

# 安装最新版本的node.js
$ sudo n stable

# 安装最新版
$ sudo n latest

# 查看已安装版本
$ n

# 版本切换
$ sudo n x.x.x
```

# version
## v0.0.1
* 定义路由
    * 跨域
    * 判断Method，接收参数(query, body)
    * 返回数据
* 中间件
    * mock