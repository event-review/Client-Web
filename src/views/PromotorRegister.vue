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
          :rules="[rules.required]"
          ></v-text-field>

          <v-text-field
          v-model="email"
          label="E-mail"
          :rules="[rules.required, rules.email]"
          required
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

  export default {
    data: () => {
      return {
        name: "",
        email: "",
        password: "",
        url: 'https://ereviewdserver.patriagani.site',
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
      registerAccount() {
        let obj = {
          name: this.name,
          email: this.email,
          password: this.password,
        }

        axios.post(`${this.url}/promotors/signup`, obj)
          .then((promotor) => {
            this.$swal("Success Register As Promotor Please Relogin", "", "success")
            this.name = ""
            this.email = ""
            this.password = ""
            this.$router.push('/promotor/signin')
          })
          .catch((error) => {
            this.$swal(`Upss It Seem Your Input Is Wrong `, '', 'error')
            console.log(error.response);
          })
      }
    }
  }
</script>
