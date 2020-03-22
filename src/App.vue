<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
require('bootstrap') 

import Header from '@/components/layouts/Header.vue'
 
export default {
  components: {
    Header
  }
}
</script>