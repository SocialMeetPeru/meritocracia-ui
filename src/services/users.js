// import ApiService from './api';

export default {
    post(user) {
        console.info('user', user);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ userId: Math.random() });
            }, 2000);
        });

        // return ApiService.post('/users', user);
    }
}