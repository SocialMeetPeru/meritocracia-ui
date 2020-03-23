import axios from 'axios'
import authService from './auth'

class ApiService {
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.VUE_APP_API_URL
        })
    }

    getHeaders() {
        return this.instance.defaults.headers
    }

    getResource(resource) {
        return this.instance.get(resource)
            .then(response => response.data)
            .catch(err => {
                throw new Error(`[ApiService] ${err}`)
            })
    }

    postResource(resource, data) {
        return this.instance.post(resource, data)
            .then(response => response.data)
            .catch(err => {
                throw new Error(`[ApiService] ${err}`)
            })
    }
}

export default (() => {
    let apiService;
    const check = () => {
        if (!apiService) {
            throw new Error('[ApiService] must call init() before using it');
        }
    }

    return {
        init() {
            apiService = new ApiService();
            apiService.instance.interceptors.request.use((config) => {
                // TODO
                return config;
            }, (err) => {
                if (err.response.status === 401) {
                    authService.destroySession()
                }

                return Promise.reject(err);
            });
        },
        getHeaders() {
            check();
            return apiService.getHeaders()
        },
        get(resource) {
            check();
            return apiService.getResource(resource)
        },
        post(resource, data) {
            check();
            return apiService.postResource(resource, data)
        }
    }
})();