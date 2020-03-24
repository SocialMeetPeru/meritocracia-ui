import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('http://34.229.211.102/src/auth/Auth.php?f=login', { login: {
            email: credentials.email,
            password: credentials.password,
          }
        })
          .then(response => {
            const token = response.data.token
            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
            resolve(response)
            // console.log(response);
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    destroyToken(context) {
      if (context.getters.loggedIn) {
        localStorage.removeItem('access_token')
        context.commit('destroyToken')
      }
    }
  },
  modules: {
  }
})
