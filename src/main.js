import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import parsInfo from './utils/parsInfo'

Vue.config.productionTip = false
Vue.use(parsInfo)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
