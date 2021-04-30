<!-- 组件说明 -->
<template>
    <div class="login">
        <div class="login-form">
            <el-form ref="form" :model="loginForm" label-width="80px">
                <el-form-item label="账号">
                    <el-input v-model="loginForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="loginIn">登录</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { test, loginIn } from '@/api/login'
import { setStore } from '@/utils/utils'
export default {
    name: 'login',
    components: {

    },
    data() {
        return {
            loginForm: {
                phone: '',
                password: ''
            }
        };
    },
    computed: {

    },
    methods: {
        loginIn() {
            const params = {
                phone: this.loginForm.phone,
                password: this.loginForm.password
            }
            loginIn(params).then(res => {
                if(res.code == '0') {
                    this.$message.success('登录成功')
                    setTimeout(res => {
                        console.log(res);
                        this.$router.push({path: '/home'})
                    }, 1000)
                    setStore('lzzhy', res);
                } else {
                    this.$message.error(res.err_msg)
                }
            })
        }
    },
    created() {

    },
    mounted() {
        test().then(res => {
            console.log(res);
        })
    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='scss' scoped>
.login {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: url('../assets/images/bac.jpg');
    .login-form {
        
        .el-form {
            width: 400px;
            text-align: center;
        }
    }
}
</style>