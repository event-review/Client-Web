import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBEvYJMA74Lg23LxjgrmxwUWD57POrRTTM",
    libraries: "places" // necessary for places input
  }
});