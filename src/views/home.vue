<!-- 组件说明 -->
<template>
    <div class="home">
        首页
        <el-button @click="toChartRoom">去聊天室</el-button>
    </div>
</template>

<script>
import { getStore } from '@/utils/utils'
export default {
    name: 'home',
    components: {

    },
    data () {
        return {

        };
    },
    computed: {

    },
    methods: {
        toChartRoom() {
            this.$router.push({path: '/websocketChat'})
        }
    },
    created() {
    
    },
    mounted() {
        console.log(9997,JSON.parse(getStore('lzzhy')));
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