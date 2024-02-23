<template>
  <div>
    <h1>{{ capitalizedSelectedType }}</h1>
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