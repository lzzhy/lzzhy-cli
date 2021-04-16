// 封装axios的请求，返回重新封装的数据格式
// 需要对返回的错误code码进行统一处理
import axios from 'axios'
import errorHandle from './errorHandle'  // 也是在utils中自己封装的一个方法
// import config from '../config/index'  // 不同环境域名配置引入进来

// 因为 baseUrl，请求头，请求拦截器，响应请求的拦截器 这些都是在对instance进行操作
// 因此在es6中可以通过定义一个类HttpRequest来放置这些方法
class HttpRequest {
    constructor(baseURL) {
        this.baseURL = baseURL
    }
    // 获取axios的配置
    getInsideConfig() {
        const config = {
            baseURL: this.baseURL,
            headers: {
                'Content-Type': 'application/json;chartset=utf-8',
            },
            timeout: 10000  // 请求超过10s默认失败，请求超时
        }
        return config;
    }
    // 设定拦截器
    interceptors(instance) {
        // 将axios github上的这段复制下来 
        // 并用instance替换axios

        // 请求拦截器
        instance.interceptors.request.use((config) => {
            console.log('发送请求');
            return config;
        }, (err) => {
            errorHandle(err)
            return Promise.reject(err);
        });

        // 响应请求的拦截器
        instance.interceptors.response.use((res) => {
            // 处理响应成功的
            console.log('请求回来的');
            if (res.status === 200) {
                return Promise.resolve(res.data)
            } else {
                return Promise.reject(res.data)
            }
        }, (err) => {
            // 对返回的错误code码进行统一处理
            errorHandle(err)
            return Promise.reject(err);
        });
    }
    // 创建实例
    request(options) {
        const instance = axios.create()
        const newOptions = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance)
        return instance.request(newOptions)
    }
    // get方法封装
    get (url,config) {
        const options = Object.assign({
            method: 'get',
            url: url
        }, config)
        return this.request(options)
    }
    // post方法封装
    post (url,data, ...config) {  // data是post请求时带的json数据
        return this.request({
            method: 'post',
            url: url,
            data: data,
            ...config
        })
    }
}

// const instance = axios.create({  
//     baseUrl: process.env.NODE_ENV === 'development' ? config.baseURL.dev : config.baseURL.pro,  // 设置初始 baseUrl 的配置，判断环境不同域名也不同
//     headers: {  // 公共的请求头
//         'Content-Type': 'application/json;chartset=utf-8',
//     },
//     timeout: 10000  // 请求超过10s默认失败，请求超时
// })

// // 将axios github上的这段复制下来 
// // 并用instance替换axios

// // 请求拦截器
// instance.interceptors.request.use((config) => {
//     console.log('发送请求');
//     return config;
// }, (err) => {
//     errorHandle(err)
//     return Promise.reject(err);
// });

// // 响应请求的拦截器
// instance.interceptors.response.use((res) => {
//     // 处理响应成功的
//     console.log('请求回来的');
//     if(res.status === 200) {
//         return Promise.resolve(res.data)
//     } else {
//         return Promise.reject(res.data)
//     }
// }, (err) => {
//     // 对返回的错误code码进行统一处理
//     errorHandle(err)
//     return Promise.reject(err);
// });


// export default instance  // 导出instance

export default HttpRequest  // 导出HttpRequest