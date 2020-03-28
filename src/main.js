import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
require('bootstrap')
import './styles/theme.scss'
import axios from 'axios'
// import ApiService from './services/api'

Vue.config.productionTip = false

// base de la url de axios
axios.defaults.baseURL = 'http://localhost:8083';

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token') || null ;

router.beforeEach(async (to, from, next) => {

  // Lee y envia el token, y devuelve false si caduco y true si esta activo
  const token = await axios.post('/src/auth/Auth.php?f=check',{ token: localStorage.getItem('token')}).then(res => { return res.data });


  // Todas las rutas que requieren Auth
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      // si el token esta vencido se va a login
      next({path: '/login'})
    } else {
      // continua normal
      next()
    }
  }

  else if (to.matched.some(record => record.meta.requiresVisitor)) {

    // Si token es falso entra pq no hay session y esta bien
    if (!token) {
      next()
    }

    else {
      next({ path: '/ranking'})
    }

  } else {
    next()
  }
})

// ApiService.init()

Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
