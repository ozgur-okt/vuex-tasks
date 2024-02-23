<template>
  <div>
    <h1>{{ capitalizedSelectedType }}</h1>
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