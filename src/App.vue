<template>
  <v-app>
    <v-toolbar dark color='#f75611'>
      <h1 @click="toHome">Event Review</h1>
      <v-btn flat>Home</v-btn>
      <v-btn flat>About</v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>All Events</v-btn>
        <v-btn flat>Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer
      dark
      height="auto"
    >
      <v-card
        flat
        tile
        class="lighten-1 white--text text-xs-center"
        color='#f75611'
      >
        <v-card-text>
          <h1>Event Review</h1>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          We are a new technology in data collection for event visitors - We can generate a report of the event visitor's emotion. We help many promoters to get data in consideration of holding the next event, and we will continue to strive to improve this technology
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2019 — <strong>Event Review</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
