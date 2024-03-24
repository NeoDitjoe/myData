<script setup>
import currentView from './Routing.js'

</script>

<template>
  <nav class="nav">
    <div>
      <h1>Logo</h1>
      <!-- <router-link to="/about">Home</router-link> -->
    </div>
    
    <div>
      <!-- <a href="#/">Installs Pie Chart</a> |
      <a href="#/bar-graph">Installs Bar Graph</a> |
      <a href="#/users-table">Users Table</a> -->
      <router-link to="/">Installs Bar Graph</router-link>
      <router-link to="/bar-graph">Installs Bar Graph</router-link>
      <router-link to="/users-table">Users Table</router-link>
    </div>
  </nav>

  <div class="body">
    <!-- <component :is="currentView" /> -->
    <router-view />
  </div>
</template>


<style>
@import './appStyles.css';
</style>