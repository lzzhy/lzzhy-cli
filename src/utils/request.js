import HttpRequest from './axios'
import config from '@/config'  // 引入配置文件 取到里面的baseUrl
const baseURL = process.env.NODE_ENV === 'development' ? config.baseURL.dev : config.baseURL.process   // 把@config中的baseUrl传递过去

const axios = new HttpRequest(baseURL)  // 实例化axios,并将baseUrl传进去

export default axios  // 导出axios

// 导出axios后，这样就完成了axios的整个的一个封装