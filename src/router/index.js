import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import authService from '@/services/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginPage.vue')
  },
  {
    path: '/regular',
    component: () => import('@/views/regular-user/Index.vue'),
    children: [
      {
        path: '',
        name: 'bartering',
        component: () => import('@/views/regular-user/Bartering.vue')
      },
      {
        path: 'signup',
        name: 'regular-signup',
        component: () => import('@/views/regular-user/SignUp.vue')
      }
    ]
  },
  {
    path: '/anonymous',
    component: () => import('@/views/anonymous/Index.vue'),
    children: [
      {
        path: '',
        name: 'anonymous-welcome',
        component: () => import('@/views/anonymous/Welcome.vue')
      }
    ]
  },
  {
    path: '/ambassador',
    component: () => import('@/views/anonymous/Index.vue'),
    children: [
      {
        path: '',
        name: 'ambassador-welcome',
        component: () => import('@/views/ambassador/Welcome.vue')
      },
      {
        path: 'signup',
        name: 'ambassador-signup',
        component: () => import('@/views/ambassador/SignUp.vue')
      },
      {
        path: 'rules',
        name: 'ambassador-rules',
        component: () => import('@/views/ambassador/Rules.vue')
      },
      {
        path: 'refer-members',
        name: 'ambassador-refer-members',
        component: () => import('@/views/ambassador/ReferMembers.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  console.info('authService.isLoggedIn', to, authService.isLoggedIn());
  if (to.name === 'home' && !authService.isLoggedIn()) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
