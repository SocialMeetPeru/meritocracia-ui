<template>
  <div class="container">
    <div id="nav">
      <router-link to="/"><i class="fa fa-users"></i> Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>