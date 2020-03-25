import axios from 'axios';

class ApiService {
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.VUE_APP_API_URL
        });
    }

    getResource(resource) {
        return this.instance.get(resource)
            .then(response => response.data)
            .catch(err => {
                throw new Error(`[ApiService] ${err}`)
            });
    }

    postResource(resource, data) {
        return this.instance.post(resource, data)
            .then(response => response.data)
            .catch(err => {
                throw new Error(`[ApiService] ${err}`)
            });
    }
}

export default (() => {
    let apiService;
    const check = () => {
        if (!apiService) {
            throw new Error('[ApiService] must call init() before using it');
        }
    };


    return {
        init() {
            apiService = new ApiService();
        },
        get(resource) {
            check();
            return apiService.getResource(resource)
        },
        post(resource, data) {
            check();
            return apiService.postResource(resource, data);
        }
    }
})();
