import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
require('bootstrap')
import './styles/theme.scss'
import ApiService from './services/api'

Vue.config.productionTip = false
ApiService.init()

Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
