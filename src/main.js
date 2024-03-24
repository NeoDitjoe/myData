import './assets/main.css'

import { createWebHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import pieGraph from '../src/components/instPieChart/instPieChart.vue'
import barGraph from '../src/components/bar-graph/Bar-graph.vue'
import UsersTable from '../src/components/users-table/Users-table.vue'


const routes = [
  { path: '/', component: pieGraph },
  { path: '/bar-graph', component: barGraph },
  { path: '/users-table', component: UsersTable },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
