// 在这里面处理一些页面拦截，权限处理之类的
export function routerBeforeEachFunc(to, from, next) {
    if(to.matched.some(record => record.meta.requireAuth)) {  // 判断该路由是否需要登录权限
        // let loginInfo = window.localStorage.getItem("loginUserInfo")
        // if(loginInfo) {  // 判断该路由是否需要登录权限
        //     next()
        // } else {
        //     next({
        //         path: '/home',
        //         query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        //     })
        // }
    } else {
        next()
    }
    next()
}