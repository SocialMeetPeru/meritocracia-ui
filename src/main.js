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

// function loggedIn(){
//   // axios.defaults.headers.common['Authorization'] = token;
//   return axios.post('/src/auth/Auth.php?f=check',{ token: localStorage.getItem('token')})
//     .then(res => {
//       return res.data;
//   })
// }

// Router Hace Match con las rutas que requieren auth o visor
// Auth : rutas que nencesitan login
// Visitor : visitante que necesita ver sin autenticacion
router.beforeEach(async (to, from, next) => {
  const token = await axios.post('/src/auth/Auth.php?f=check',{ token: localStorage.getItem('token')}).then(res => { return res.data });
  console.log(token)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (token) {
      next({name: 'login'})
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {

    // Si no hay token
    if (store.getters.loggedIn == false) {
      // console.log(store.getters.loggedIn)
      next({
        // name: 'Login',
      })
    } else {
      next('ranking')
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
