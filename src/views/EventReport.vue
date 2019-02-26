<template>
  <div class="">
    <v-container grid-list-md text-xs-center>
      <br>
      <h1 style="margin-left:100px;">{{ this.rawData.name }}</h1>
      <br>
      <hr>
      <br>
      <br>
      <v-layout row wrap>

        <v-flex xs4 sm4 pa-1>
          <h3>Total Visitor :{{ this.rawData.userAttend.length }}</h3>
          <br>
          <h3>Male: {{ this.male.total }}</h3>
          <br>
          <h3>Female: {{ this.female.total }}</h3>
          <br>
          <BarCart :data="[ this.male.total, this.female.total, 0]" :labels="['Male', 'Female']"/>
        </v-flex>

        <v-flex xs8 sm8 pa-1>
          <h3>Range Age : {{ this.min_age }} - {{ this.max_age }}</h3>
          <br>
          <h3>Male: {{ this.male.min_age }} - {{ this.male.max_age }}</h3>
          <br>
          <h3>Female: {{ this.female.min_age }} - {{ this.female.max_age }}</h3>
          <br>
          <BarCart :data="[this.barAge[0],this.barAge[1],this.barAge[2],this.barAge[3],this.barAge[4]]" :labels="['18-24', '25-24', '35-44', '45-54', '55 - Above']"/>
        </v-flex>

      </v-layout>
    </v-container>
    <br><br>
    <v-container grid-list-md text-xs-center>
      <h1 style="margin-left:100px;">Emotion Report</h1>
      <br>
      <hr>
      <br>
      <br>
      <v-layout row wrap v-if="checkData">
        <v-flex xs4 sm4 pa-1>
          <br>
          <br>
          <br>
          <br>
          <h2>Before Event</h2>
          <br>
          <h3>Happy : {{ this.beforePieChart.happy }}% </h3>
          <br>
          <h3>Neutral: {{ this.beforePieChart.neutral }}% </h3>
          <br>
          <h3>Sad: {{ this.beforePieChart.sad }}% </h3>
          <br>
          <h3>Fear: {{ this.beforePieChart.fear }}% </h3>
          <br>
          <h3>Angry: {{ this.beforePieChart.angry }}% </h3>
          <br>
          <h3>Contempt: {{ this.beforePieChart.contempt }}% </h3>
          <br>
          <h3>Disgust: {{ this.beforePieChart.disgust }}% </h3>
          <br>
          <h3>Surprise: {{ this.beforePieChart.surprise }}% </h3>
        </v-flex>
        <v-flex xs8 sm8 pa-1>
          <PieCart :data="[this.beforePieChart.happy,this.beforePieChart.neutral,this.beforePieChart.sad,this.beforePieChart.fear,this.beforePieChart.angry, this.beforePieChart.contempt, this.beforePieChart.disgust, this.beforePieChart.surprise]" :labels="['Happy', 'Neutral', 'Sad', 'Fear', 'Angry', 'Contempt', 'Disgust', 'Surprise']"/>
        </v-flex>
      </v-layout>
      <br><br><br>
      <v-layout row wrap v-if="checkData">
        <v-flex xs4 sm4 pa-1>
          <br>
          <br>
          <br>
          <br>
          <h2>After Event</h2>
          <br>
          <h3>Happy : {{ this.afterPieChart.happy }}%</h3>
          <br>
          <h3>Neutral: {{ this.afterPieChart.neutral }}%</h3>
          <br>
          <h3>Sad: {{ this.afterPieChart.sad }}% </h3>
          <br>
          <h3>Fear: {{ this.afterPieChart.fear }}% </h3>
          <br>
          <h3>Angry: {{ this.afterPieChart.angry }}% </h3>
          <br>
          <h3>Contempt: {{ this.afterPieChart.contempt }}% </h3>
          <br>
          <h3>Disgust: {{ this.afterPieChart.disgust }}% </h3>
          <br>
          <h3>Surprise: {{ this.afterPieChart.surprise }}% </h3>
        </v-flex>

        <v-flex xs8 sm8 pa-1>
          <PieCart :data="[this.afterPieChart.happy,this.afterPieChart.neutral,this.afterPieChart.sad,this.afterPieChart.fear,this.afterPieChart.angry, this.afterPieChart.contempt, this.afterPieChart.disgust, this.afterPieChart.surprise, { responsive: true, maintainAspectRatio: false }]" :labels="['Happy', 'Neutral', 'Sad', 'Fear', 'Angry', 'Contempt', 'Disgust', 'Surprise']"/>
        </v-flex>
      </v-layout>
      <br><br><br>
      <v-layout row wrap>
        <v-flex xs12 sm12 pa-1>
          <CompareBarCart/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import BarCart from '../components/BarCart'
  import PieCart from '../components/PieCart'
  import CompareBarCart from '../components/CompareBarCart'

  export default {
    components: {
      BarCart,
      PieCart,
      CompareBarCart
    },
    data () {
      return {
        rawData: {},
        checkData: false,
        beforeEventData: {},
        afterEventData: {},
        barAge: [0,0,0,0,0], // 18-24, 25-45, 35-44, 45-54, 55 - above
        male: { total: 0, min_age: 0, max_age:  0 },
        female: { total: 0, min_age: 0, max_age:  0 },
        min_age: 0,
        max_age: 0,
        beforePieChart: { happy:0, neutral:0, sad:0, fear:0, angry:0, contempt:0, disgust:0, surprise:0 },
        afterPieChart: { happy:0, neutral:0, sad:0, fear:0, angry:0, contempt:0 , disgust:0 , surprise:0 }
      }
    },
    methods: {
      fetchEvent() {
        axios({
          method: 'get',
          url: `http://35.197.132.154/events/${this.$route.params.id}`,
        })
        .then(({ data }) => {
          this.rawData = data.event
          this.getOverallInfo()
        })
        .catch((err) => {
          console.log(err)
        })
      },
      fetchBeforeEvent() {
        axios({
          method: 'get',
          url: `http://35.197.132.154/beforeEvent/${this.$route.params.id}`
        })
        .then(({ data }) => {
          this.beforeEventData = data
          this.fetchAfterEvent()
        })
        .catch((err) => {
          console.log(err)
        })
      },
      fetchAfterEvent() {
        axios({
          method: 'get',
          url: `http://35.197.132.154/afterEvent/${this.$route.params.id}`
        })
        .then(({ data }) => {
          this.afterEventData = data
          this.getEmotionalInfo()
        })
        .catch((err) => {
          console.log(err)
        })
      },
      getOverallInfo() {
        let data = this.rawData.userId
        data.forEach(datum => {
          let birth_of_year = new Date(datum.dob).getFullYear()
          let this_year = new Date().getFullYear()
          let sum = this_year - birth_of_year

          if (datum.gender == 'Male') {
            this.male.total += 1
            if (sum < this.male.min_age) {
              this.male.min_age = sum
            } if (sum > this.male.max_age) {
              this.male.max_age = sum
            }
          } else {
            this.female.total += 1
            if (sum < this.female.min_age) {
              this.female.min_age = sum
            } else if (sum > this.female.max_age) {
              this.female.max_age = sum
            }
          }

          if (sum < this.min_age) {
            this.min_age = sum
          }
          if (sum > this.max_age) {
            this.max_age = sum
          }

          if (sum < 24) {
            this.barAge[0] += 1
          } else if (sum < 34) {
            this.barAge[1] += 1
          } else if (sum < 44) {
            this.barAge[2] += 1
          } else if (sum < 54) {
            this.barAge[3] += 1
          } else {
            this.barAge[4] += 1
          }
        });
        //  male: { total: 20, min_age: 20, max_age:  30 },
        // female: { total: 30, min_age: 24, max_age:  32 },
        // min_age: 20,
        // max_age: 40,
        //  barAge: [100,80,20,0,0], // 18-24, 25-34, 35-44, 45-54, 55 - above
      },
      getEmotionalInfo() {
        console.log('MASUK EMOTIONAL INFOOO')
        let before = this.beforeEventData.stats
        let after = this.afterEventData.stats
        console.log(before, 'ini beforeeee')
        console.log(after, 'ini afterrrr')
        let summarize_before = [0,0,0,0,0,0,0,0] // happiness, neutral, sad, fear, angry, contempt, disgust, surrpise
        let summarize_after = [0,0,0,0,0,0,0,0]
        let sum_before = 0
        let sum_after = 0
        before.forEach(e => {
          if (e.emotion[0].appealing_emotion.emotions == 'happiness') {
            summarize_before[0] += 1
            sum_before += 1
          } else if (e.emotion[0].appealing_emotion.emotions == 'neutral') {
            summarize_before[1] += 1
            sum_before += 1
          } else if (e.emotion[0].appealing_emotion.emotions == 'sadness') {
            summarize_before[2] += 1
            sum_before += 1
          } else if (e.emotion[0].appealing_emotion.emotions == 'fear') {
            summarize_before[3] += 1
            sum_before += 1
          } else if (e.emotion[0].appealing_emotion.emotions == 'anger') {
            summarize_before[4] += 1
            sum_before += 1
          } else if (e.emotion[0].appealing_emotion.emotions == 'contempt') {
            summarize_before[5] += 1
            sum_before += 1
          } else if (e.emotion[0].appealing_emotion.emotions == 'disgust') {
            summarize_before[6] += 1
            sum_before += 1
          } else if (e.emotion[0].appealing_emotion.emotions == 'surprise') {
            summarize_before[7] += 1
            sum_before += 1
          }
        });
        after.forEach(e => {
          if (e.emotion[0].appealing_emotion.emotions == 'happiness') {
            summarize_after[0] += 1
            sum_after += 1
          } else if (e.emotion[0].appealing_emotion.emotions == 'neutral') {
            summarize_after[1] += 1
            sum_after += 1
          } else if (e.emotion[0].appealing_emotion.emotions == 'sadness') {
            summarize_after[2] += 1
            sum_after += 1
          } else if (e.emotion[0].appealing_emotion.emotions == 'fear') {
            summarize_after[3] += 1
            sum_after += 1
          } else if (e.emotion[0].appealing_emotion.emotions == 'anger') {
            summarize_after[4] += 1
            sum_after += 1
          } else if (e.emotion[0].appealing_emotion.emotions == 'contempt') {
            summarize_after[5] += 1
            sum_after += 1
          } else if (e.emotion[0].appealing_emotion.emotions == 'disgust') {
            summarize_after[6] += 1
            sum_after += 1
          } else if (e.emotion[0].appealing_emotion.emotions == 'surprise') {
            summarize_after[7] += 1
            sum_after += 1
          }
        });
        let object = this.beforePieChart
        let i = 0
        console.log(summarize_before, 'summarized befoer')
        console.log(summarize_after, 'cok')
        for (const key in object) {
          this.beforePieChart[key] = Math.floor((summarize_before[i] / sum_before) * 100)
          this.afterPieChart[key] = Math.floor((summarize_after[i] / sum_after) * 100)
          i += 1
        }
         console.log(this.beforePieChart, 'f before pie ')
        console.log(this.afterPieChart, 'f after pie')
        this.checkData = true
      }
    },
    created() {
      this.fetchEvent()
      this.fetchBeforeEvent()
      // this.fetchAfterEvent()
    },
    mounted() {
      this.fetchAfterEvent()
      this.fetchBeforeEvent()
      this.getEmotionalInfo()
    },
    computed: {
      beforePieChartData() {
        return this.beforePieChartData
      },
      afterPieChartData() {
        return this.afterPieChartData
      }
    },
    watch: {
      beforePieChart: function() {
        this.getEmotionalInfo()
      },
      afterPieChart: function() {
        this.getEmotionalInfo()
      }
    }
  }
</script>
