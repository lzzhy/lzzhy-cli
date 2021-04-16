// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Login from '../views/login.vue'
// import Home from '../views/home.vue'

// Vue.use(VueRouter)

// 这样写也可以但是只能拿到@router/index.js中的路由
// const routes = [
//     {
//         path: '/',  // 这样默认运行地址进去就是Login页面
//         name: 'Login',
//         component: Login
//     },
//     {
//         path: '/Home',
//         name: 'Home',
//         component: Home
//     }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

import { importAll } from '@/utils/utils'

const routeModules = importAll(  // importAll这样可以匹配到@/router/modules下的路由，就可以把路由按照模块来写不用堆在一个文件中
    require.context('@/router/modules', false, /\.js$/)
)
const routes = routeModules.reduce(
    (finallRoutes, routerModule) =>
        finallRoutes.concat(routerModule.module),
    []
)
export default routes  // 导出的router按模块划分写在不同的js页面里
