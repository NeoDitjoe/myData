<script setup>
import currentView from './Routing.js'

</script>

<template>
  <nav class="nav">
    <a href="#/">Home</a> |
    <a href="#/about">About</a> |
    <a href="#/users">Users</a>
  </nav>

  <div class="body">
    <component :is="currentView" />
  </div>
</template>


<style>
@import './appStyles.css';
</style>