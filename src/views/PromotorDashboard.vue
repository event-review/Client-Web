<template>
  <div class="">
    <v-container grid-list-md text-xs>
      <center>
      <div>
        <v-btn @click="toAddEvent">Add Event Profile</v-btn>
        <v-btn @click="toYourEvents">Your Events</v-btn>
      </div>
     </center>
      <br>
      <div v-if="page == 'addevent'">
        <center><h1>Add New Event</h1></center>
        <br>
        <v-form
        ref="form"
        >

        <h2>Event Poster</h2><br>
        <input type="file" ref="file" v-on:change="handleFileUpload()">
        <br>

        <v-text-field
        v-model="eventName"
        label="Event Name"
        required
        ></v-text-field>

        <v-flex xs12 sm6 md4>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="date"
              label="Event Date"
              readonly
            ></v-text-field>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>

        <v-flex xs11 sm5>
          <v-menu
            ref="menuTimeStart"
            v-model="menuTimeStart"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="timeStart"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="timeStart"
              label="Event Time Start"
              readonly
            ></v-text-field>
            <v-time-picker
              v-if="menuTimeStart"
              v-model="time"
              full-width
              @click:minute="$refs.menuTimeStart.save(time)"
            ></v-time-picker>
          </v-menu>
        </v-flex>

        <v-flex xs11 sm5>
          <v-menu
            ref="menuTimeEnd"
            v-model="menuTimeEnd"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="timeEnd"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="timeEnd"
              label="Event Time End"
              readonly
            ></v-text-field>
            <v-time-picker
              v-if="menuTimeEnd"
              v-model="time"
              full-width
              @click:minute="$refs.menuTimeEnd.save(time)"
            ></v-time-picker>
          </v-menu>
        </v-flex>

        <v-text-field
        v-model="eventPrice"
        type="number"
        label="Event Ticket Price"
        required
        ></v-text-field>

        <v-textarea
        v-model="eventDescription"
        label="Description"
        required
        ></v-textarea>
        <br><br>

        <GoogleMap @address="setAddress" @marker="setMarker"/>

        <br><br>
        <v-btn
        color="success"
        @click="addEvent"
        >
        Add Event
        </v-btn>

        </v-form>
      </div>

      <div v-if="page == 'yourevents'">
        <v-card style="margin-bottom: 20px;">
          <v-container
            fluid
            grid-list-lg
          >
          <v-layout row wrap>
            <v-flex xs4>
              <v-img
                src="https://i.pinimg.com/originals/9a/0d/cc/9a0dccc677dc591ac8cd9e0fe35147e1.jpg"
                aspect-ratio="0.667"
                height='274'
                contain
              ></v-img>
            </v-flex>
            <v-flex xs4>
              <v-card-title><h3>Electro</h3></v-card-title>
              <v-card-text>
                <p>21 Desember 2019, 18.00PM</p>
                <p>Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</p>
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              <div style="margin: 100px;">
                <v-btn large dark color="blue">Event Report</v-btn><br>
                <v-btn large dark color="#f75611">Event Details</v-btn><br>
              </div>
            </v-flex>
            </v-layout>
          </v-container>
        </v-card>

        <v-card>
          <v-container
            fluid
            grid-list-lg
          >
          <v-layout row wrap>
            <v-flex xs4>
              <v-img
                src="https://d19fbfhz0hcvd2.cloudfront.net/NDF/wp-content/uploads/2014/11/event_posters12.jpg"
                aspect-ratio="0.667"
                height='274'
                contain
              ></v-img>
            </v-flex>
            <v-flex xs4>
              <v-card-title><h3>Chromeo</h3></v-card-title>
              <v-card-text>
                <p>21 Desember 2019, 18.00PM</p>
                <p>Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</p>
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              <div style="margin: 100px;">
                <v-btn large dark color="blue">Event Report</v-btn><br>
                <v-btn large dark color="#f75611">Event Details</v-btn><br>
              </div>
            </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
  import GoogleMap from '../components/GoogleMap'

  export default {
    components: {
      GoogleMap
    },
    data: () => {
      return {
        menu: false,
        menuTimeStart: false,
        menuTimeEnd: false,
        page: 'addevent',
        longitude: "",
        latitude: "",
        eventPlace: "",
        eventName: "",
        eventPrice: "",
        eventDescription: "",
        date: "",
        timeStart: null,
        timeEnd: null,
        url: 'http://localhost:3000'
      }
    },
    props: ['url'],
    methods: {
      toAddEvent() {
        this.page = "addevent"
      },
      toYourEvents() {
        this.page = "yourevents"
      },
      handleFileUpload() {
        this.file = this.$refs.file.files[0];
        console.log(this.file,"patria")
        // console.log(this.file, 'ini this dot file')
      },
      setAddress(address) {
        this.eventPlace = address
      },
      setMarker(marker) {
        this.latitude = marker.lat,
        this.longitude = marker.lng
      },
      addEvent() {
        let newevent = {
          name: this.eventName,
          place: this.eventPlace,
          date: this.date,
          price: this.eventPrice,
          timeStart: this.timeStart,
          timeEnd: this.timeEnd,
          latitude: this.latitude,
          longitude: this.longitude,
          description: this.eventDescription
        };

        const formData = new FormData();
        formData.append("file", this.file);
        formData.append("data", JSON.stringify(newevent));
        axios({
          method: 'post',
          url: `${this.url}/events`,
          data: formData,
          headers: {token: localStorage.getItem('token')}
        })
        .then((response) => {
          this.page = "yourevents"
        })
        .catch((error) => {
          console.log(error);
        })
      }
    },
    created() {

    },
    mounted() {

    }
  }
</script>
