<script setup>

</script>

<template>
  <nav class="nav">
    <div>
      <h1>Logo</h1>
      <!-- <router-link to="/about">Home</router-link> -->
    </div>
    
    <div>
      <router-link to="/">Installs Bar Graph</router-link>
      <router-link to="/bar-graph">Installs Bar Graph</router-link>
      <router-link to="/users-table?page=0">Users Table</router-link>
    </div>
  </nav>

  <div class="body">
    <router-view />
  </div>
</template>


<style>
@import './appStyles.css';
</style>