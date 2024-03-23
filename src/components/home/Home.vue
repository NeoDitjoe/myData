<script>

let numInstalls = []
fetch('../../../util/pieChart.json')
  .then(res => res.json())
  .then(data => numInstalls(data))

import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'PieChart',
    components: { Pie },
    data() {
        return {
            chartData: {
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [40, 20, 80, 10]
                    }
                ]
            },
            chartOptions: {
                responsive: true
            }
        }
    }}
  

</script>

<template>
  <div class="greetings">
    <h1 class="green">Home</h1>
    <Pie id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

