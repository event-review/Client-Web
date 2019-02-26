<template>
  <div class="">
    <br>
    <center><h1>User Register Account</h1></center>
    <v-container grid-list-md text-xs-center>
      <center>
        <v-flex xs6>
          <v-form
          ref="form"
          >

          <v-text-field
          v-model="name"
          label="Name"
          :rules="[rules.required]"
          required
          ></v-text-field>

          <v-text-field
          v-model="username"
          label="Username"
          :rules="[rules.required]"
          required
          ></v-text-field>

          <v-text-field
          v-model="email"
          :rules="[rules.required, rules.email]"
          required
          label="E-mail"
          ></v-text-field>
          
          <v-text-field
          v-model="password"
          type="password"
          name="input-10-1"
          label="Password"
          :rules="[rules.required]"
          required
          ></v-text-field>

          <v-select
          :items="items"
          label="Gender"
          @change="selectGender"
          ></v-select>

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
          label="Date Of Birth"
          readonly
          ></v-text-field>

          <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
          </v-menu>
          
          
          <!-- <div>
            <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
              <img :src="imageUrl" height="150" v-if="imageUrl"/>
              <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
              <input
                type="file"
                style="display: none"
                ref="image"
                accept="image/*"
                @change="onFilePicked"
              >
            </v-flex>
	        </div> -->
          <input type="file" ref="file" v-on:change="handleFileUpload()">
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
    components: {
    },
    data: () => {
      return {
        name: "",
        username: "",
        email: "",
        password: "",
        url: 'http://35.197.132.154',
        rules: {
          required: value => !! value ||  'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        PageTitle: '',
			  imageName: '',
			  imageUrl: '',
        imageFile: '',
        items: ['Male', 'Female'],
        gender: ''
      }
    },
    methods: {
      registerAccount() {
        let newUser = {
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
          gender: this.gender,
          dob: this.date
        }
        const formData = new FormData()
        formData.append("file", this.file)
        formData.append("data", JSON.stringify(newUser))

        axios({
          method: 'post',
          url: `${this.url}/users/signup`,
          data: formData, 
        })
        .then((user) => {
          this.name = ""
          this.username = ""
          this.email = ""
          this.password = ""
          this.gender = ""
          this.date = ""
          this.PageTitle = ""
          this.imageName =  ""
          this.imageUrl =  ""
          this.imageFile = ""
          this.$router.push('/user/signin')
        })
        .catch((error) => {
          console.log(error.response.data.message);
        })
      },
      formatDate (date) {
        if (!date) return null
        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null
        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      pickFile () {
			  this.$refs.image.click ()
      },
    //   onFilePicked (e) {
    //     console.log("atas",e.target.files[0])
		// 	  const files = e.target.files
    //     this.file = e.target.files[0]
		// 	  if(files[0] !== undefined) {
		// 		  this.imageName = files[0].name
		// 		if(this.imageName.lastIndexOf('.') <= 0) {
		// 		  return
		// 		}
		// 		const fr = new FileReader ()
		// 		fr.readAsDataURL(files[0])
		// 		fr.addEventListener('load', () => {
		// 			this.imageUrl = fr.result
    //       this.imageFile = files[0] // this is an image file that can be sent to server...
    //       console.log(this.file, 'yo watsapppini this.file');
		// 		})
		// 	} else {
		// 		this.imageName = '';
		// 		this.imageFile = '';
		// 		this.imageUrl = '';
    //   }
    // },
      selectGender(val) {
        console.log(val);
        this.gender = val;
      },
      handleFileUpload() {
        this.file = this.$refs.file.files[0];
        console.log(this.file)
      },
    },
    // created() {
    //   let token = localStorage.getItem('token')
    //   if (token.length !== 0) {
    //     this.$router.push('/');
    //   }
    // },
    mounted() {
		  var starting = document.getElementsByClassName('starting');
		  for (var i = starting.length - 1; i >= 0; i--) {
			  starting[i].classList.remove("starting");
		  }
	  },
  }
</script>
