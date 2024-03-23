import { ref, computed } from 'vue'

import Home from './components/home/Home.vue';
import BarGraph from './components//bar-graph/Bar-graph.vue';
import NotFound from './components/NotFound.vue'
import Users from './components/users/Users.vue'

const routes = {
  '/': Home,
  '/bargraph': BarGraph,
  '/users': Users
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

export default currentView