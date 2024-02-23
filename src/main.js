import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import store from './store';
import AllTasks from './views/AllTasks.vue'
import FilteredTasks from './views/FilteredTasks.vue'

const routes = [
  {
    path: '/',
    name: 'all',
    component: AllTasks
  },
  {
    path: '/weekly',
    name: 'weekly',
    component: FilteredTasks
  },
  {
    path: '/daily',
    name: 'daily',
    component: FilteredTasks
  },
  {
    path: '/monthly',
    name: 'monthly',
    component: FilteredTasks
  }
]


const router = createRouter({
history: createWebHistory(),
routes
})

createApp(App).use(router).use(store).mount('#app')
