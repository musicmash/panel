import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResoruce from 'vue-resource'
import router from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResoruce)

Vue.http.options.root = "http://185.91.53.208:8844/v1"
Vue.http.headers.common['x-user-name'] = 'objque@gmail.com';

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
