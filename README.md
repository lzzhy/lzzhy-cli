* 单页面配置：详细说明见[博客,戳我！！！](https://lzzhy.cn/Vue-%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/)

* 接口配置：需要连接后端接口,打开数据库（代码在koa+mongondb+lzzhycli）

## websocket-chat.vue 
这个页面是一个用 websocket 来实现聊天的一个前端基本流程，主要就是 websocket 的几个事件：send，handleMessage，handleOpen，handleClose 而现实中的业务中只是对以上这些 websocket 一些根据业务逻辑的相关拓展