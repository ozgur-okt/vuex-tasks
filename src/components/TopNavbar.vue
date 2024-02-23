<template>
  <div class="navbar">
    <router-link class="navbar-brand" to="/">My Vue App</router-link>
    <div class="navbar-items">
      <router-link class="navbar-item" to="/" @click="selectType('all')">All</router-link>
      <router-link class="navbar-item" to="/weekly" @click="selectType('weekly')">Weekly</router-link>
      <router-link class="navbar-item" to="/daily" @click="selectType('daily')">Daily</router-link>
      <router-link class="navbar-item" to="/monthly" @click="selectType('monthly')">Monthly</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNavbar',
  methods: {
    selectType(type) {
      this.$store.commit('setSelectedType', type)
    }
  }
}
</script>