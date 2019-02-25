<template>
  <div class="">
    <br>
    <center><h1>Promotor Register Account</h1></center>
    <v-container grid-list-md text-xs-center>
      <center>
        <v-flex xs6>
          <v-form
          ref="form"
          >

          <v-text-field
          v-model="name"
          label="Name"
          required
          ></v-text-field>

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
          @click="registerAccount"
          >
          Register Account
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
        name: "",
        email: "",
        password: ""
      }
    },
    props: ['url'],
    methods: {
      registerAccount() {
        let obj = {
          name: this.name,
          email: this.email,
          password: this.password,
        }

        axios.post(`${this.url}/promotors/signup`, obj)
          .then((promotor) => {
            console.log('Berhasil tambah promotor');
            this.name = ""
            this.email = ""
            this.password = ""
            this.$router.push('/promotor/signin')
          })
          .catch((error) => {
            console.log(error.response);
          })
      }
    }
  }
</script>
