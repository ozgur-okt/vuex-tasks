<template>
  <div>
    <div>Description:</div>
    <div v-if="seeMore">{{ item.description }}</div>
    <div v-else>{{ item.description.substring(0, 100) }}...</div>
    <button @click="toggleSeeMore">{{ seeMore ? 'See Less' : 'See More' }}</button>

    <div>
      <div>Occurrence: {{ item.occurrence }}</div>
      <div>Priority: {{ item.priority }}</div>
      <div>Responsible Users:</div>
      <div v-for="user in item.responsibleUsers" :key="user.id">
        <div>{{user.responsibleUser.name}}</div>
      </div>
      <div>Tenants:</div>
      <div v-for="tenant in item.tenants" :key="tenant.id">
        <div>{{ tenant.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleTask',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      seeMore: false
    }
  },
  methods: {
    toggleSeeMore() {
      this.seeMore = !this.seeMore
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>