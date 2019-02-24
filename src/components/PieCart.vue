<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: ['data', 'labels'],
  data: () => ({
    options:{
      responsive: true,
      maintainAspectRatio: false,
      }
  }),

  mounted () {
    this.renderChart({
      labels: this.labels,
        datasets:[{
          label:['Population'],
          data: this.data,
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          hoverBorderWidth:2,
          hoverBorderColor:'grey',
        }]
    }, this.options)
  }
}

</script>

<style>
</style>
