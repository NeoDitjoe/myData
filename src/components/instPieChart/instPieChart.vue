<script>

import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      showLabel: null,
      chartData: {
        labels: null,
        datasets: [
          {
            backgroundColor: ['blue', '#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: null
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },

  mounted() {
    fetch('../../../util/pieChart.json')
      .then(res => res.json())
      .then(data => {
        this.chartData.labels = data?.map((item) => item.year)
        this.showLabel = data?.map((item) => item.year)
        this.chartData.datasets[0].data = data?.map((item) => item.numInstalls)
      })
  }
}


</script>

<template>

    <h1 class="green">Yearly Installs Pie Chart</h1>
    
    <div class="pie-container">
      <div class="pie-chart">
        <Pie v-if="showLabel" id="my-chart-id" :options="chartOptions" :data="chartData" class="chart" />
      </div>
    </div>

</template>


<style>
@import './instPieChart.css';
</style>