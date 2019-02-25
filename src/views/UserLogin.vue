<template>
  <div class="">
    <br>
    <center><h1>User Login Account</h1></center>
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
        :rules="[rules.required, rules.email]"
        ></v-text-field>

        <v-text-field
        v-model="password"
        type="password"
        name="input-10-1"
        label="Password"
        required
        :rules="[rules.required]"
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
        url: 'http://localhost:3000',
        rules: {
          required: value => !! value ||  'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        }
      }
    },
    methods: {
      loginAccount() {
        let obj = {
          email: this.email,
          password: this.password
        }
        axios.post(`${this.url}/users/signin`, obj)
          .then(({ data }) => {
            localStorage.setItem('token', data.token)
            this.$store.dispatch('checkLoginState')
            this.$router.push('/')
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
