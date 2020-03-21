<template>
  <div class="container">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/auth/Login.vue'
import ApiService from '../services/api';

export default {
  name: 'Home',
  components: {
    Login
  },
  created() {
    ApiService.get('/posts')
      .then((response) => console.info('response', response));
  }
}
</script>
