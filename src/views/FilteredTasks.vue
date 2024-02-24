<template>
  <div class="tasks">
    <h1 class="header">
      {{ capitalizedSelectedType }}
      <span class="badge">{{ filteredData.length }}</span>
    </h1>
    <SingleTask v-for="(item, index) in filteredData" :key="index" :item="item"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SingleTask from '../components/SingleTask.vue'

export default {
  name: 'FilteredTasks',
  components: {
    SingleTask
  },
  computed: {
    ...mapGetters(['data', 'selectedType']),
    capitalizedSelectedType() {
      return this.selectedType.charAt(0).toUpperCase() + this.selectedType.slice(1) + " Tasks"
    },
    filteredData() {
      return this.data.filter(item => item.occurrence === this.selectedType)
    }
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