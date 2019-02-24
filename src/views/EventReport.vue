<template>
  <div class="">
    <v-container grid-list-md text-xs-center>
      <br>
      <h1 style="margin-left:100px;">Vans Triple Count Surfing Report</h1>
      <br>
      <hr>
      <br>
      <br>
      <v-layout row wrap>

        <v-flex xs4 sm4 pa-1>
          <h3>Total Visitor : 100</h3>
          <br>
          <h3>Male: 60</h3>
          <br>
          <h3>Female: 40</h3>
          <br>
          <BarCart :data="[60,40,0,100]" :labels="['Male', 'Female']"/>
        </v-flex>

        <v-flex xs8 sm8 pa-1>
          <h3>Range Age : 20 - 42</h3>
          <br>
          <h3>Male: 20 - 42</h3>
          <br>
          <h3>Female: 20 - 35</h3>
          <br>
          <BarCart :data="[60,40,20,34,12,0,100]" :labels="['18-24', '25-45', '35-44', '45-54', '55 - Above']"/>
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
      <v-layout row wrap>
        <v-flex xs4 sm4 pa-1>
          <br>
          <br>
          <br>
          <br>
          <h2>Before Event</h2>
          <br>
          <h3>Happy : 100</h3>
          <br>
          <h3>Neutral: 40</h3>
          <br>
          <h3>Sad: 60</h3>
          <br>
          <h3>Fear: 60</h3>
          <br>
          <h3>Angry: 40</h3>
        </v-flex>

        <v-flex xs8 sm8 pa-1>
          <PieCart :data="[20,40,30,40,15]" :labels="['Happy', 'Neutral', 'Sad', 'Fear', 'Angry']"/>
        </v-flex>
      </v-layout>
      <br><br><br>
      <v-layout row wrap>
        <v-flex xs4 sm4 pa-1>
          <br>
          <br>
          <br>
          <br>
          <h2>After Event</h2>
          <br>
          <h3>Happy : 100</h3>
          <br>
          <h3>Neutral: 40</h3>
          <br>
          <h3>Sad: 60</h3>
          <br>
          <h3>Fear: 60</h3>
          <br>
          <h3>Angry: 40</h3>
        </v-flex>

        <v-flex xs8 sm8 pa-1>
          <PieCart :data="[60,40,20,34,12]" :labels="['Happy', 'Neutral', 'Sad', 'Fear', 'Angry']"/>
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

      }
    },
  }
</script>
