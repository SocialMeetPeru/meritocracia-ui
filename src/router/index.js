import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/auth/Login.vue'

// Trueque
import TruequeNew from '../views/trueque/TruequeNew'
import TruequeRegister from '../views/trueque/TruequeRegister'

// Ambasador
import AmbasadorUno from '../views/ambassador/AmbassadorUno'
import AmbasadorDos from '../views/ambassador/AmbassadorDos'
import AmbasadorTres from '../views/ambassador/AmbassadorTres'
import AmbasadorCuatro from '../views/ambassador/AmbassadorCuatro'

// Anonymous
import AnonymousRegister from '../views/anonymous/AnonymousRegister'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/trueque_new',
    name: 'TruequeNew',
    component: TruequeNew
  },
  {
    path: '/trueque_register',
    name: 'TruequeRegister',
    component: TruequeRegister
  },
  {
    path: '/ambassador_uno',
    name: 'AmbassadorUno',
    component: AmbasadorUno
  },
  {
    path: '/ambassador_dos',
    name: 'AmbassadorDos',
    component: AmbasadorDos
  },
  {
    path: '/ambassador_tres',
    name: 'AmbassadorTres',
    component: AmbasadorTres
  },
  {
    path: '/ambassador_cuatro',
    name: 'AmbassadorCuatro',
    component: AmbasadorCuatro
  },
  {
    path: '/anonymous_register',
    name:'AnonymousRegister',
    component: AnonymousRegister
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
