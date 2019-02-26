<template>
  <div class="">
    <v-card>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs5 sm5 pa-1>
            <h1>{{data.name}}</h1>
            <v-img
              :src="data.imageUrl"
              aspect-ratio="0.667"
              contain
            ></v-img>
          </v-flex>
          <v-flex xs7 sm7 pa-1>
            <v-card-title primary-title>
              <div style="padding-left:50px;padding-top:50px">
                <div> {{ data.description }}  </div>
                <br>
                <h3>Address: </h3>
                <p>{{ data.place }}</p>
                <h3>Time</h3>
                <p>{{ date }} From {{ data.timeStart }} To {{ data.timeEnd }}</p>
                <GoogleMapDetail :coordinates="data"/>
                <br>
                <!-- <v-card-actions>
                  <v-btn large center dark color="orange">Join Event</v-btn>
                </v-card-actions> -->
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
        date: ''
      }
    },
    methods: {
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