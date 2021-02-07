import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from "axios";
import App from './App.vue'
import router from './router/index.js'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use({
  install (Vue) {
  Vue.prototype.$api = axios.create({
    //baseURL: 'http://localhost:3000'
    baseURL: 'https://muslimgauze-backend.herokuapp.com/'
  })
}})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
