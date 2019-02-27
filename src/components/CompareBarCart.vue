<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data', 'labels', 'before', 'after'],
  data: () => ({
    options:{
      responsive: true,
      maintainAspectRatio: false
      }
  }),

  mounted () {
    this.renderChart({
      labels: ['before', 'after'],
        datasets:[
          {
          label:['Happy'],
          data: [this.before.happy,this.after.happy,0],
          backgroundColor:'rgba(255, 99, 132, 0.6)',
          hoverBorderWidth:2,
          hoverBorderColor:'grey'
        },
        {
          label:['Neutral'],
          data: [this.before.neutral,this.after.neutral,0],
          backgroundColor:'rgba(54, 162, 235, 0.6)',
          hoverBorderWidth:2,
          hoverBorderColor:'grey'
        },
        {
          label:['Sad'],
          data: [this.before.sad,this.after.sad,0],
          backgroundColor:'rgba(255, 206, 86, 0.6)',
          hoverBorderWidth:2,
          hoverBorderColor:'grey'
        },
        {
          label:['Fear'],
          data: [this.before.fear,this.after.fear,0],
          backgroundColor:'rgba(75, 192, 192, 0.6)',
          hoverBorderWidth:2,
          hoverBorderColor:'grey'
        },
        {
          label:['Angry'],
          data: [this.before.angry,this.after.angry,0],
          backgroundColor:'rgba(153, 102, 255, 0.6)',
          hoverBorderWidth:2,
          hoverBorderColor:'grey'
        },
        {
          label:['Contempt'],
          data: [this.before.contempt,this.after.contempt,0],
          backgroundColor:'rgba(100, 200, 20, 0.6)',
          hoverBorderWidth:2,
          hoverBorderColor:'grey'
        },
            {
          label:['Disgust'],
          data: [this.before.disgust,this.after.disgust,0],
          backgroundColor:'rgba(256, 20, 10, 0.6)',
          hoverBorderWidth:2,
          hoverBorderColor:'grey'
        },
            {
          label:['Surprise'],
          data: [this.before.surprise,this.after.surprise,0],
          backgroundColor:'rgba(256, 130, 20, 0.6)',
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
