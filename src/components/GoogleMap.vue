<template>
  <div>
    <div>
      <h2>Event Location</h2>
      <br>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <v-btn color="primary" @click.prevent="addMarker">Add Location</v-btn>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="18"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        console.log(this.currentPlace)
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        console.log(this.currentPlace.formatted_address)
        this.$emit('address', this.currentPlace.formatted_address)
        console.log(marker)
        this.$emit('marker', marker)
        this.currentPlace = null;

      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
          this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>