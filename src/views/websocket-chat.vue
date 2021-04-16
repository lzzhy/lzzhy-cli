<!-- 组件说明
    这个页面是一个用 websocket 来实现聊天的一个前端基本流程
    主要就是 websocket 的几个事件：send，handleMessage，handleOpen，handleClose
    而现实中的业务中只是对以上这些 websocket 一些根据业务逻辑的相关拓展
-->

<template>
    <div class="websocket-chat">
        <div class="messages" v-for="(item, index) in msgList" :key="index">
            {{item}}
        </div>
        <input type="text" placeholder="请输入消息" v-model="msg">
    </div>
</template>

<script>
//import x from ''
export default {
    components: {

    },
    data () {
        return {
            msg: '',
            msgList: []
        };
    },
    computed: {

    },
    methods: {
        handleSendBtnClick() {
            const msg = this.msg;
            if(!msg.trim().length) {  // 输入框中没值则return 
                return
            }
            ws.send(JSON.stringify({
                id: new Data().getTime(),
                user: this.userName,
                dataTime: new Data().getTime,
                msg: this.msg
            }))

            this.msg = ''
        },
        handleOpen(e) {
            console.log(e);
        },
        handleClose(e) {
            console.log(e);
        },
        handleError(e) {
            console.log(e);
        },
        handleMessage(e) {
            console.log(e.data);
            const msg = JSON.parse(e.data)
            this.msgList.push(msg)
        }
    },
    created() {
    
    },
    mounted() {
        // const socket = new WebSocket('ws://localhost:8080');  // ws可以改成wss意思为加密（跟http和https一个意思）

        // ws.addEventListener('open', this.handleOpen.bind(this), false)  // 通过bind改变this的指向
        // ws.addEventListener('close', this.handleClose.bind(this), false)
        // ws.addEventListener('error', this.handleError.bind(this), false)
        // ws.addEventListener('message', this.handleMessage.bind(this), false)
    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>

<style lang='scss' scoped>
</style>