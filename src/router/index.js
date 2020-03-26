import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Logout from "../views/auth/Logout";
import StartOption from '../views/regular-user/StartOption'

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
    component: () => import('@/views/auth/LoginPage.vue'),
    meta: {
      requiresVisitor: true,
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/start_option',
    name: 'StartOption',
    component: StartOption,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/regular',
    component: () => import('@/views/regular-user/Index.vue'),
    children: [
      {
        path: 'bartering',
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
  },
  {
    path: '/referred',
    component: () => import('@/views/referred/Index.vue'),
    children: [
      {
        path: '',
        name: 'referred-welcome',
        component: () => import('@/views/referred/Welcome.vue')
      },
      {
        path: 'options',
        name: 'options',
        component: () => import('@/views/referred/Options.vue')
      }
    ]
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('@/views/ranking/Ranking.vue'),
    meta: {
      requiresAuth: true,
    }
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
