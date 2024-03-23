<script setup>
import currentView from './Routing.js'

</script>

<template>
  <nav class="nav">
    <div>
      <h1>Logo</h1>
    </div>
    
    <div>
      <a href="#/">Installs Pie Chart</a> |
      <a href="#/bar-graph">Installs Bar Graph</a> |
      <a href="#/users-table">Users Table</a>
    </div>
  </nav>

  <div class="body">
    <component :is="currentView" />
  </div>
</template>


<style>
@import './appStyles.css';
</style>