import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$http = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com/'
})
// Vue.prototype.$http = () => 

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
