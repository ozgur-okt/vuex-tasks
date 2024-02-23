<template>

<TopNavbar />
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import TopNavbar from './components/TopNavbar.vue';

export default {
  name: 'App',
  components: {
    TopNavbar
  },
  created() {
    this.$store.dispatch('fetchData')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
