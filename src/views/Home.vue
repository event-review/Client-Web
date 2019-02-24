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

        <v-flex xs4 sm4 pa-1>
          <v-card>
            <v-img
              src="https://epkcollection.com/wp-content/uploads/2017/11/WSL_EPKposter_VansTripleCrown.jpg"
              aspect-ratio="0.667"
              contain
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Vans Triple Count Surfing</h3>
                <div> Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.  </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs4 sm4 pa-1>
          <v-card>
            <v-img
              src="https://d19fbfhz0hcvd2.cloudfront.net/NDF/wp-content/uploads/2014/11/event_posters12.jpg"
              aspect-ratio="0.667"
              contain
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Chromeo Kill Paris</h3>
                <div> Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.  </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs4 sm4 pa-1>
          <v-card>
            <v-img
              src="https://i.pinimg.com/originals/9a/0d/cc/9a0dccc677dc591ac8cd9e0fe35147e1.jpg"
              aspect-ratio="0.667"
              contain
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Electro</h3>
                <div> Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.  </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
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
    data () {
      return {
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
  }
</script>
