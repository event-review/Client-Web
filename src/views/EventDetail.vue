<template>
  <div class="">
    <v-card>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs5 sm5 pa-1>
            <h1>Vans Triple Count Surfing</h1>
            <v-img
              src="https://epkcollection.com/wp-content/uploads/2017/11/WSL_EPKposter_VansTripleCrown.jpg"
              aspect-ratio="0.667"
              contain
            ></v-img>
          </v-flex>
          <v-flex xs7 sm7 pa-1>
            <v-card-title primary-title>
              <div style="padding-left:50px;padding-top:50px">
                <div> Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.  </div>
                <br>
                <h3>21 Desember 2018 @ 18.00 WIB</h3>
                <br>
                <h3>Lapangan Sepak Bola Belakang Hacktiv8, Jakarta Selatan</h3>
                <br>
                <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0228619079257!2d106.7794275139168!3d-6.260718695468388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a8713ce207%3A0x2c3ea1f4a28bfac5!2sHacktiv8+Indonesia!5e0!3m2!1sen!2sid!4v1550845427276" width="600" height="350" frameborder="0" style="border:0" allowfullscreen></iframe> -->
                <GoogleMapDetail />
                <br>
                <v-card-actions>
                  <v-btn large center dark color="orange">Join Event</v-btn>
                </v-card-actions>
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

      }
    },
  }
</script>
