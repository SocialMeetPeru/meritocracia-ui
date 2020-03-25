<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Meritocracia</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/login" v-if="loggedIn" class="nav-link">Ranking</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" v-if="!loggedIn" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" v-if="!loggedIn" class="nav-link">Registro</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" v-if="loggedIn" class="nav-link">Logout</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
  export default {
    data(){
      return{
        loggedIn: ''
      }
    },
    methods:{
      openLogin(){
        this.loggedIn = this.$store.getters.loggedIn;
        console.log(this.loggedIn);
      }
    },
    mounted() {
      this.openLogin();
    }
  }
</script>
