<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <b-container fluid class='px-5'>
      <NavbarComponent/>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
// import SiteWideAlertComponent from '@/components/SiteWideAlertComponent.vue';

export default {
  name: 'App',
  components : {
    NavbarComponent,
    // SiteWideAlertComponent,
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
</style>
