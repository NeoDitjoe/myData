<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})

fetch('./pieChart.json')
  .then(res => res.json())
  .then(data => console.log(data))

</script>

<template>
  <div class="greetings">
    <h1 class="green">Home</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

