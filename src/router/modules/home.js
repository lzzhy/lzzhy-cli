const App = () =>
    import ('@/layout/home.vue')
import Home from '@/views/home.vue'
import websocketChat from '@/views/websocket-chat.vue'

export default {
    path: "/home",
    component: App,  // App 需要在上面引入,是一个嵌套页面的壳子
    // redirect: "/Home",
    meta: {
        title: "",
        requireAuth: false, // 添加该字段，表示进入这个路由是需要登录的
        isback: true
    },
    children: [
        {
            path: "/Home",
            meta: {
                title: '首页'
            },
            component: Home
        },
        {
            path: "/websocketChat",
            
            name: websocketChat,
            component: () => import('@/views/websocket-chat.vue')
        }
    ]
}