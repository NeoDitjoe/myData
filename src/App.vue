<script>
import axios from "axios"

export default {

  data() {
    return {
      currentPage: null
    }
  },

  created() {
    this.currentPage = this.$router.currentRoute.value.path;
  },

  methods: {
    highlightLink() {
      this.currentPage = this.$router.currentRoute.value.path
    },

    async addData() {
      try {
        const results = await axios.post('http://localhost:5100/api/insert')
        console.log(results)
        alert('sucess')
      } catch (error) {
        alert('Error')
      }
    }
  }
}

</script>

<template>
  <nav class="nav">
    <div>
      <h1>Logo</h1>
    </div>

    <div class="menu">
      <router-link @click="highlightLink" :class="{ active: this.$router.currentRoute.value.path === '/' }"
        to="/">Installs_Pie_Chart</router-link>
      <router-link @click="highlightLink" :class="{ active: this.$router.currentRoute.value.path === '/bar-graph' }"
        to="/bar-graph">Installs_Bar_Graph</router-link>
      <router-link @click="highlightLink" :class="{ active: this.$router.currentRoute.value.path === '/users-table' }"
        to="/users-table?page=0">Users_Table</router-link>
    </div>
  </nav>

  <div class="body">
    <router-view />
    <button @click="addData">Add Data</button>
  </div>
</template>


<style>
@import './appStyles.css';
</style>
