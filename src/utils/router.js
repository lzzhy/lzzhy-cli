// 路由拦截或者叫导航守卫 https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB
import Vue from 'vue'
import Router from 'vue-router'
import ROUTES from '@/router/index'
import { ROUTER_DEFAULT_CONFIG } from '@/config/index'
import { routerBeforeEachFunc } from '@/config/router'

Vue.use(Router)

// 注入默认配置和路由表
let routerInstance = new Router({
    ...ROUTER_DEFAULT_CONFIG,  // 默认配置
    routes: ROUTES  // 路由表
})

routerInstance.beforeEach(routerBeforeEachFunc)  // routerBeforeEachFunc 是beforeEach的参数

export default routerInstance  // 导出前置守卫