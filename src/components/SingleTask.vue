<template>
  <div class="card">
    <div class="details">
      <div class="detail">Occurrence: <div class="info">{{ item.occurrence }}</div>
      </div>
      <div class="detail">Priority: <div class="info">{{ item.priority }}</div>
      </div>
      <div>
        <div class="detail">Responsible Users:</div>
        <div v-for="user in item.responsibleUsers" :key="user.id">
          <div class="detail">
            <div class="info">* {{ user.responsibleUser.name }}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="detail">Tenants:</div>
        <div v-for="tenant in item.tenants" :key="tenant.id">
          <div class="detail">
            <div class="info">* {{ tenant.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail">Description:</div>
    <div class="detail description info" v-if="seeMore">{{ item.description }}</div>
    <div class="detail description info" v-else>{{ item.description.substring(0, 100) }}...</div>
    <button class="see-btn" @click="toggleSeeMore">{{ seeMore ? 'See Less' : 'See More' }}</button>
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
    };
  },
  methods: {
    toggleSeeMore() {
      this.seeMore = !this.seeMore;
    }
  }
};
</script>

<style>
.card {
  width: 100%;
  max-width: 900px;
  height: 100%;
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.details {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.see-btn {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.see-btn:hover {
  background-color: #0056b3;
}

.detail {}

.info {
  font-weight: bold;
}
</style>