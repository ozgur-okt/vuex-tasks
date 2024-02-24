<template>
  <div class="navbar">
    <router-link class="navbar-brand" to="/">Vuex Task App</router-link>
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
      this.$store.commit('setSelectedType', type);
    }
  }
};
</script>
<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 10px 20px;
  background-color: #007bff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-size: 1.5em;
  font-weight: bold;
  color: #f5f5f5;
  text-decoration: none;
}

.navbar-brand:hover {
  color: #333;
}

.navbar-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-item {
  margin: 0 10px;
  color: #f5f5f5;
  text-decoration: none;
}
.navbar-item:hover {
  color: #333;
}
</style>