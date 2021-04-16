const App = () =>
    import ('@/layout/home.vue')
const Login = () => import('@/views/login.vue')  // 可以写成这种写法，原本是 import Login from '../../views/login.vue' 

// 这样默认运行地址进去就是Login页面
// const routes = [
//     {
//         path: '/',  
//         name: 'Login',
//         component: Login
//     },
//     {
//         path: '/Home',
//         name: 'Home',
//         component: Home
//     }
// ]

export default {
    path: "/",
    component: App,  // App 需要在上面引入,是一个嵌套页面的壳子
    redirect: "/Login",
    meta: {
        title: "",
        requireAuth: false, // 添加该字段，表示进入这个路由是需要登录的
        isback: true
    },
    children: [
        {
            path: "/Login",
            meta: {
                title: '登录页'
            },
            component: Login
        }
    ]
}