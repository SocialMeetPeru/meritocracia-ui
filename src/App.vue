<template>
  <div>
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>

import Header from '@/components/layouts/Header.vue'
 
export default {
  components: {
    Header
  }
}
</script>