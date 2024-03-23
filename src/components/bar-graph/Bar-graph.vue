<script>

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12]
          }
        ]
      }
    }
  },

  mounted() {
    fetch('../../../util/barGraph.json')
      .then(res => res.json())
      .then(data => {

        const label = data.map((item) => {
          const label = item.month
          return label
        })
        this.labels = label
      });
  }

}
</script>

<template>
  <Bar :data="chartData" />
</template>
