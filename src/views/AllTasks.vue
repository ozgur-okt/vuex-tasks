<template>
  <div class="tasks">
    <h1 class="header">
      {{ capitalizedSelectedType }}
      <span class="badge">{{ data.length }}</span>
    </h1>
    <SingleTask v-for="(item, index) in data" :key="index" :item="item"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SingleTask from '../components/SingleTask.vue'

export default {
  name: 'AllTasks',
  components: {
    SingleTask
  },
  computed: {
    ...mapGetters(['data', 'selectedType']),
    capitalizedSelectedType() {
      return this.selectedType.charAt(0).toUpperCase() + this.selectedType.slice(1) + " Tasks"
    },
  }
}
</script>

<style>
.tasks {
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
}

.badge {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 0.8em;
  margin-left: 10px;
  width: 30px;
}
</style>