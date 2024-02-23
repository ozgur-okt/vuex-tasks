import AllTasks from './components/AllTasks.vue'
import FilteredTasks from './components/FilteredTasks.vue'

export const routes = [
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


