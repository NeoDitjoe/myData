import { ref, computed } from 'vue'

import instPieChart from './components/instPieChart/instPieChart.vue';
import BarGraph from './components//bar-graph/Bar-graph.vue';
import NotFound from './components/NotFound.vue'
import UsersTable from './components/users-table/Users-table.vue'

const routes = {
  '/': instPieChart,
  '/bar-graph': BarGraph,
  '/users-table': UsersTable
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

export default currentView