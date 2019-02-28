<template>
  <v-app>
    <v-toolbar dark color='#f75611'>
      <h1 @click="toHome">EREVIEWD</h1>
      <!-- <v-btn @click="toHome" flat>Home</v-btn>
      <v-btn @click="toAbout" flat>About</v-btn> -->
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!-- <v-btn flat>All Events</v-btn> -->
        <!-- <v-btn v-if="!isLogin" @click="toUserSignin" flat>Sign In As User</v-btn> -->
        <v-btn v-if="isLogin" @click="toDashboard" flat>Dashboard</v-btn>
        <v-btn v-if="!isLogin" @click="toPromotorSignin" flat>Sign In As Event Organizer</v-btn>
        <v-btn v-if="isLogin" @click="logout" flat>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view :url="url"></router-view>
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
          <h1>EREVIEWD</h1>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          We are a new technology in data collection for event visitors - We can generate a report of the event visitor's emotion. We help many promoters to get data in consideration of holding the next event, and we will continue to strive to improve this technology
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2019 — <strong>EREVIEWD</strong>
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
      url: 'https://ereviewdserver.patriagani.site',
    }
  },
  methods: {
    toHome() {
      this.$router.push('/')
    },
    toAbout() {
      this.$router.push('/about')
    },
    toUserSignin() {
      this.$router.push('/user/signin')
    },
    toPromotorSignin() {
      this.$router.push('/promotor/signin')
    },
    logout() {
      localStorage.clear()
      this.$router.push('/')
      this.$store.dispatch('checkLoginState')
    },
    toDashboard() {
      this.$router.push('/promotor/dashboard')
    }
  },
  created() {
    this.$store.dispatch('checkLoginState')
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  }
}
</script>
