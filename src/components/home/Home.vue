<script>

let numInstalls = []
fetch('../../../util/pieChart.json')
  .then(res => res.json())
  .then(data => numInstalls(data))

  

</script>

<template>
  <div class="greetings">
    <h1 class="green">Home</h1>
    
  </div>
</template>

