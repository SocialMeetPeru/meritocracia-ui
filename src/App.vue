<template>
  <div>
    <Header :key="updated" />
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
  },
  data(){
    return{
      updated: 0
    }
  },

  watch: {
    '$route': function (value) {
      // console.log(value)
      // Actualiza el componente Heade cuando pasa a esas rutas
      if (value.name == 'Ranking'){
        this.updated++;
      }
    }
  }
}
</script>
