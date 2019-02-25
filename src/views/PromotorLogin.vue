<template>
  <div class="">
    <br>
    <center><h1>Promotor Login Account</h1></center>
    <v-container grid-list-md text-xs-center>
      <center>
      <v-flex xs4>
        <v-form
        ref="form"
        >
        <v-text-field
        v-model="email"
        label="E-mail"
        required
        ></v-text-field>

        <v-text-field
        v-model="password"
        type="password"
        name="input-10-1"
        label="Password"
        ></v-text-field>

        <v-btn
        color="#f75611" dark
        @click="loginAccount"
        >
        Login
        </v-btn>

        </v-form>
      </v-flex>
      </center>
    </v-container>
  </div>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'

  export default {
    components: {
      // HelloWorld
    },
    data: () => {
      return {
        email: "",
        password: "",
      }
    },
    props: ['url'],
    methods: {
      loginAccount() {
        let obj = {
          email: this.email,
          password: this.password
        }
        axios.post(`${this.url}/promotors/signin`, obj)
          .then((response) => {
            localStorage.setItem('token', response.data.token)
            this.$store.dispatch('checkLoginState')
            this.$router.push('/promotor/dashboard')
          })
          .catch((error) => {
            console.log(error.message);
          })
      },
    },
    created() {
      let token = localStorage.getItem('token')
      if (token.length !== 0) {
        this.$router.push('/');
      }
    }
  }
</script>
