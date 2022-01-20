<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <div id="pageContent">
      <NavbarComponent/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  name: 'App',
  components : {
    NavbarComponent
  }
};
</script>

<style>
#app {
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#pageContent {
  width: 80%;
  margin: 0 auto;
}
</style>
