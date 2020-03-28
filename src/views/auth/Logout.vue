<template>
  <div></div>
</template>
<script>
  export default {
    methods: {
      Logout() {
        this.$store.dispatch('destroyToken')
        this.$router.push('login')
      }
    },
    mounted() {
      this.Logout();
    }
  }
</script>
