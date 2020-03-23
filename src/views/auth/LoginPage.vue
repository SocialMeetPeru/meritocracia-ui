<template>
  <div class="container">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/auth/Login.vue'

export default {
  name: 'LoginPage',
  components: {
    Login
  }
}
</script>
