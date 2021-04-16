// import axios from './utils/axios'  // 引入封装好的axios
import axios from '@/utils/request'  // 引入封装好的axios

// gets 这样封装就等价于utils=>axios.js中的get方法： axios.request({
//      methods: 'get',
//      url: '/get'
//  })
const test = () => {  // 接口
    return axios.get('/test')  
}
const login = () => {
    return axios.post('/save')
}

export { test, login }