import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from '@/App'
import router from '@/routes'
import DateFilter from '@/filters/date'
import store from '@/store'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.filter("date", DateFilter)

Vue.http.options.root = "http://185.91.53.208:8844/v1"
Vue.http.headers.common['x-user-name'] = 'objque@gmail.com';

new Vue({
  render: h => h(App),
  router: router,
  store: store,
}).$mount('#app')
