import Vue from 'vue'
import ApiService from './api';
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

export default {
    isLoggedIn() {
        return !!Vue.localStorage.get('token')
    },
    login(username, password) {
        return new Promise((resolve) => {
            console.info('username', username, 'password', password)
            const token = Math.random();
            Vue.localStorage.set('token', token)
            ApiService.getHeaders().common['Authorization'] = `Bearer ${token}`;
            resolve()
        });
        // return ApiService.post('/auth', { username, password });
    },
    logout() {
        // TODO: request to back
        this.destroySession()
    },
    destroySession() {
        Vue.localStorage.remove('token')
    },
    getCurrentSession() {

    },
    resetPassword() {

    },
    updatePassword() {

    }
}