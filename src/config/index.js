// 域名配置文件
export default {
    baseURL: {
        dev: "http://localhost:5000/api/users",
        pro: "http://localhost:5000/api/users"
    }
}

// 路由默认配置，路由表并不从此注入
export const ROUTER_DEFAULT_CONFIG = {  // history 模式
    mode: 'history'
}