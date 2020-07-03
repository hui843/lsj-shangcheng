import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.http = axios;  //跨域请求
import Element from 'element-ui'  //饿了么ui组件
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
