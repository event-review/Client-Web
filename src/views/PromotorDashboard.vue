<template>
  <div class="">
    <v-container grid-list-md text-xs>
      <center>
      <div>
        <v-btn @click="toAddEvent">Add Event Profile</v-btn>
        <v-btn @click="toYourEvents">Your Events</v-btn>
        <v-btn @click="toScanQr">Scan QR</v-btn>
      </div>
     </center>
      <br>
      <div v-if="page == 'scanqr'">
        <QrcodeStream @decode="onDecode"/>
      </div>
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
        <v-card v-for="(even, i) in events" :key=i style="margin-bottom: 20px;">
          <v-container
            fluid
            grid-list-lg
          >
          <v-layout row wrap>
            <v-flex xs4>
              <v-img
                :src="even.imageUrl"
                aspect-ratio="0.667"
                height='274'
                contain
              ></v-img>
            </v-flex>
            <v-flex xs4>
              <v-card-title><h3>{{even.name}}</h3></v-card-title>
              <v-card-text>
                <p>{{new Date(even.date).toLocaleString().slice(0,10)}} {{even.timeStart}} - {{even.timeEnd}}</p>
                <p>{{even.description}}</p>
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              <div style="margin: 50px;">
                <v-btn @click="toEventReport(even._id)" large dark color="blue">Event Report</v-btn><br>
                <v-btn @click="toEventDetail(even._id)" large dark color="#f75611">Event Details</v-btn><br>
                <v-btn @click="toConnectCam(even._id)" large dark color="green">Connect Cam</v-btn><br>
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
  import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

  export default {
    components: {
      GoogleMap,
      QrcodeStream,
      QrcodeDropZone,
      QrcodeCapture
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
        events: []
      }
    },
    props: ['url'],
    methods: {
      toScanQr() {
        this.page = "scanqr"
      },
      toConnectCam(id) {
        this.$router.push(`/event/${id}/connectcam`)
      },
      onDecode(decodedString) {
        let obj = JSON.parse(decodedString)
        let {userId, eventId} = obj

        axios({
          method: 'get',
          url: `${this.url}/events/attend/${userId}/${eventId}`,
          headers: {token: localStorage.getItem('token')}
        })
        .then((response) => {
          console.log('berhasil memasukan', userId, eventId);
        })
        .catch((error) => {
          console.log(error);
        })
      },
      toEventDetail(id) {
        this.$router.push(`/event/${id}`)
      },
      toEventReport(id) {
        this.$router.push(`/event/report/${id}`)
      },
      toAddEvent() {
        this.page = "addevent"
      },
      toYourEvents() {
        this.page = "yourevents"
      },
      handleFileUpload() {
        this.file = this.$refs.file.files[0];
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
          this.getEvents()
        })
        .catch((error) => {
          console.log(error);
        })
      },
      getEvents() {
        axios({
          method: 'get',
          url: `${this.url}/promotors/events`,
          headers: {token: localStorage.getItem('token')}
        })
        .then((response) => {
          this.events = response.data.events
        })
        .catch((error) => {
          console.log(error);
        })
      }
    },
    created() {
      this.getEvents()
      let token = localStorage.getItem('token')
      if (token == null) {
        this.$router.push('/promotor/signin')
      }
    },
    mounted() {
      this.getEvents()
    }
  }
</script>
