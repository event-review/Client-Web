<template>
  <div class>
    <v-container grid-list-md text-xs>
      <br>
      <center>
        <h1>Edit {{eventName}}</h1>
      </center>
      <br>
      <v-form ref="form">
        <h2>Event Poster</h2>
        <br>
        <input type="file" ref="file" v-on:change="handleFileUpload()">
        <br>

        <v-text-field v-model="eventName" label="Event Name" required></v-text-field>

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
          <v-text-field slot="activator" v-model="date" label="Event Date" readonly></v-text-field>
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
        <v-text-field slot="activator" v-model="timeStart" label="Event Time Start" readonly></v-text-field>
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
      <v-text-field slot="activator" v-model="timeEnd" label="Event Time End" readonly></v-text-field>
      <v-time-picker
      v-if="menuTimeEnd"
      v-model="time"
      full-width
      @click:minute="$refs.menuTimeEnd.save(time)"
      ></v-time-picker>
    </v-menu>
  </v-flex>

  <v-text-field v-model="eventPrice" type="number" label="Event Ticket Price" required></v-text-field>

  <v-textarea v-model="eventDescription" label="Description" required></v-textarea>
  <br>
  <br>

  <GoogleMap @address="setAddress" @marker="setMarker"/>

  <br>
  <br>
  <v-btn color="success" @click="updateEvent">Update Event</v-btn>
</v-form>
    </v-container>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap";

export default {
  components: {
    GoogleMap,
  },
  data: () => {
    return {
      menu: false,
      menuTimeStart: false,
      menuTimeEnd: false,
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
    };
  },
  props: ["url"],
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    setAddress(address) {
      this.eventPlace = address;
    },
    setMarker(marker) {
      (this.latitude = marker.lat), (this.longitude = marker.lng);
    },
    updateEvent() {
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
        method: "patch",
        url: `${this.url}/events/${this.$route.params.id}`,
        data: formData,
        headers: { token: localStorage.getItem("token") }
      })
        .then(response => {
          this.$swal(`Event Updated`, "", "success");
          this.$router.push(`/events/${this.$route.params.id}`)
        })
        .catch(error => {
          console.log(error);
        });
    },
    getEvent() {
      axios({
        method: "get",
        url: `${this.url}/events/${this.$route.params.id}`,
        headers: { token: localStorage.getItem("token") }
      })
        .then(response => {
          this.eventName = response.data.event.name
          this.eventPlace = response.data.event.place
          this.date = response.data.event.date
          this.eventPrice = response.data.event.price
          this.timeStart = response.data.event.timeStart
          this.timeEnd = response.data.event.timeEnd
          this.latitude = response.data.event.latitude
          this.longitude = response.data.event.longitude
          this.eventDescription = response.data.event.description
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.getEvent();
    let token = localStorage.getItem("token");
    if (token == null) {
      this.$router.push("/promotor/signin");
    }
  },
  mounted() {
    this.getEvents();
  }
};
</script>
