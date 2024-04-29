<script>

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { getMonthlyInstalls } from '@/util/axios-action.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      loadData: null,
      chartData: {
        labels: null,
        datasets: [
          {
            label: 'Number of Installs',
            backgroundColor: '#f87979',
            data: null
          }
        ]
      }
    }
  },

  async mounted() {
    const res = await getMonthlyInstalls()

    this.chartData.labels = res?.map((item) => item.month)
    this.chartData.datasets[0].data = res?.map((item) => item.numInstalls)
    this.loadData = res?.map((item) => item.numInstalls)
  }
}
</script>

<template>
  <h1 class="green">Monthly Installs Bar Graph</h1>
  <div class="bar-graph">
    <Bar :data="chartData" v-if="loadData" />
  </div>
  <button @click="monthlyInstalls">click me</button>
</template>

<style>
@import './instBarGraph.css';
</style>
