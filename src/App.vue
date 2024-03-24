<script>

export default {

  data(){
    return {
      currentPage: null
    }
  },

  created() {
    this.currentPage = this.$router.currentRoute.value.path;
  },

  methods: {
    highlightLink(){
      console.log(this.$router.currentRoute.value.path)
      this.currentPage = this.$router.currentRoute.value.path
    }
  }
}

</script>

<template>
  <nav class="nav">
    <div>
      <h1>Logo</h1>
    </div>
    
    <div>
      <router-link @click="highlightLink" :class="{ active: this.$router.currentRoute.value.path === '/' }" to="/">Installs Bar Graph</router-link>
      <router-link @click="highlightLink" :class="{ active: this.$router.currentRoute.value.path === '/bar-graph' }" to="/bar-graph">Installs Bar Graph</router-link>
      <router-link @click="highlightLink" :class="{ active: this.$router.currentRoute.value.path === '/users-table' }" to="/users-table?page=0">Users Table</router-link>
    </div>
  </nav>

  <div class="body">
    <router-view />
  </div>
</template>


<style>
@import './appStyles.css';
</style>