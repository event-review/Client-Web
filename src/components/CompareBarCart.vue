<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data', 'labels'],
  data: () => ({
    options:{
      responsive: true,
      maintainAspectRatio: false
      }
  }),

  mounted () {
    this.renderChart({
      labels: ['Before', 'After'],
        datasets:[
          {
          label:['Happy'],
          data: [40,20,0],
          backgroundColor:'rgba(255, 99, 132, 0.6)',
          hoverBorderWidth:2,
          hoverBorderColor:'grey'
        },
        {
          label:['Neutral'],
          data: [50,10,0],
          backgroundColor:'rgba(54, 162, 235, 0.6)',
          hoverBorderWidth:2,
          hoverBorderColor:'grey'
        },
        {
          label:['Sad'],
          data: [30,10,0],
          backgroundColor:'rgba(255, 206, 86, 0.6)',
          hoverBorderWidth:2,
          hoverBorderColor:'grey'
        },
        {
          label:['Fear'],
          data: [30,10,0],
          backgroundColor:'rgba(75, 192, 192, 0.6)',
          hoverBorderWidth:2,
          hoverBorderColor:'grey'
        },
        {
          label:['Angry'],
          data: [40,15,0],
          backgroundColor:'rgba(153, 102, 255, 0.6)',
          hoverBorderWidth:2,
          hoverBorderColor:'grey'
        },
      ]
    }, this.options)
  }
}

</script>

<style>
</style>

<!-- backgroundColor:[
  'rgba(255, 99, 132, 0.6)',
  'rgba(54, 162, 235, 0.6)',
  'rgba(255, 206, 86, 0.6)',
  'rgba(75, 192, 192, 0.6)',
  'rgba(153, 102, 255, 0.6)',
  'rgba(255, 159, 64, 0.6)',
  'rgba(255, 99, 132, 0.6)'
], -->
