import Vue from 'vue'
import ElementUI from 'element-ui';   // 完整引入element
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from '@/utils/router.js'
import '@/utils/axios'  // 可以直接@这样引入，因为vue-cli封装了alias。但是引入图片的时候需要加上~，如：<img src="~@/assets/xx.png">
// import axios from 'axios'
Vue.config.productionTip = false


Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
