<template>
  <div class="">
    <v-carousel hide-controls light hide-delimiters height='370'>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    </v-carousel-item>
    </v-carousel>
    <br>
    <h1 style="margin-left:100px;">What's Good In Indonesia</h1>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>

        <v-flex v-for="(even, i) in events" :key="i" xs4 sm4 pa-1>
          <v-card>
            <v-img
              :src="even.imageUrl"
              aspect-ratio="0.667"
              contain
            ></v-img>

            <div>
              <h3 class="headline mb-0">{{even.name}}</h3>
              <h4>{{new Date(even.date).toLocaleString().slice(0,10)}} {{even.timeStart}} to {{even.timeEnd}}</h4>
              <br>
            </div>
            <br>
            <!-- <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions> -->
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    components: {

    },
    props: ['url'],
    data () {
      return {
        events: [],
        items: [
          {
            src: 'https://50nx67a44a-flywheel.netdna-ssl.com/wp-content/uploads/2018/03/Tomorrowland-2017-1068x580.jpg'
          },
          {
            src: 'https://www.mch-group.com/-/media/mch-group/Images/Content/News/Blog/2017/2017-04/mch-group-live-marketing-aktivierung.jpg'
          },
          {
            src: 'https://www.tourismsaskatchewan.com/~/media/things-to-do/events/sasktel-centre-concert-events.jpg'
          },
          {
            src: 'http://www.darklandmusic.com/wp-content/uploads/2017/12/Who-is-a-Good-Publicity-Event-Photographers.jpg'
          }
        ]
      }
    },
    methods: {
      getEvents() {
        axios({
          method: "get",
          url: `${this.url}/events`,
          headers: { token: localStorage.getItem("token") }
        })
          .then(response => {
            this.events = response.data.events.slice(0,6);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    created() {
      this.getEvents()
    }
  }
</script>
