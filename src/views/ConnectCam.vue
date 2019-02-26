<template>
  <div class="">
    <v-card>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs4 sm4 pa-1>
            <h1>{{data.name}}</h1>
            <v-img
              :src="data.imageUrl"
              aspect-ratio="0.667"
              contain
            ></v-img>
          </v-flex>
          <v-flex xs8 sm8 pa-1>
            <v-card-title primary-title>
              <div style="padding-left:50px;padding-top:50px;">
                <h2>{{ date }}, From {{ data.timeStart }} To {{ data.timeEnd }}</h2>
                <br>
                <h2>Connect Camera to this Event</h2>
                <v-img
                src="https://cdn.shopify.com/s/files/1/0790/4327/products/311aArXJSpL_grande.jpg?v=1529605130"
                aspect-ratio="1"
                width="300"
                height="300"
                contain
                ></v-img>
                <br>
                <v-text-field
                v-model="deviceId"
                label="Camera Device Id"
                required
                ></v-text-field>
                <v-btn @click="connectCam" color="primary">Connect Cam</v-btn>
              </div>
            </v-card-title>
          </v-flex>

        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import GoogleMapDetail from '@/components/GoogleMapDetail'
  export default {
    components: {
      GoogleMapDetail
    },
    data () {
      return {
        data: {},
        date: '',
        deviceId: ""
      }
    },
    methods: {
      connectCam() {
        axios({
          method: 'patch',
          url: `http://35.197.132.154/events/${this.$route.params.id}`,
          data: {data: JSON.stringify({deviceId: this.deviceId})},
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(({data}) => {
          console.log(data.message);
        })
        .catch((error) => {
          console.log(error.response.data);
        })
      },
      fetchDetail() {
        axios({
          method: 'get',
          url: `http://35.197.132.154/events/${this.$route.params.id}`,
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(({ data }) => {
          this.data = data.event
          this.deviceId = data.event.deviceId
          let date = new Date(data.event.date)
          this.date = date.toDateString()
        })
        .catch((e) => {
          console.log(e)
        })
      }
    },
    created() {
      this.fetchDetail()
    }
  }
</script>


// detail masukin price, tanggal, tempat, timestart, time end