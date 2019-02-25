<template>
  <div class="">
    <v-container grid-list-md text-xs>
      <center>
      <div>
        <v-btn>Add Event Profile</v-btn>
        <v-btn>Your Events</v-btn>
      </div>
     </center>
      <br>
      <div v-if="page == 'addevent'">
        <center><h1>Add New Event</h1></center>
        <br>
        <v-form
        ref="form"
        >

        <h2>Product Image</h2><br>
        <input type="file" ref="file" v-on:change="handleFileUpload()">
        <br>

        <v-text-field
        v-model="productName"
        label="Product Name"
        required
        ></v-text-field>

        <v-text-field
        v-model="productPrice"
        type="number"
        label="Price"
        required
        ></v-text-field>

        <v-select
        :items="categories"
        v-model="productCategory"
        label="Category"
        data-vv-name="productCategory"
        required
        ></v-select>

        <v-textarea
        v-model="productDescription"
        label="Description"
        required
        ></v-textarea>

        <v-btn
        color="success"
        @click="addProduct"
        >
        Add Product
        </v-btn>

        </v-form>
      </div>

      <div v-if="page == 'joinedevents'">
        <v-card style="margin-bottom: 20px;">
          <v-container
            fluid
            grid-list-lg
          >
          <v-layout row wrap>
            <v-flex xs4>
              <v-img
                src="https://i.pinimg.com/originals/9a/0d/cc/9a0dccc677dc591ac8cd9e0fe35147e1.jpg"
                aspect-ratio="0.667"
                height='274'
                contain
              ></v-img>
            </v-flex>
            <v-flex xs4>
              <v-card-title><h3>Electro</h3></v-card-title>
              <v-card-text>
                <p>21 Desember 2019, 18.00PM</p>
                <p>Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</p>
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              <div style="margin: 100px;">
                <v-btn large dark color="blue">Event Report</v-btn><br>
                <v-btn large dark color="#f75611">Event Details</v-btn><br>
              </div>
            </v-flex>
            </v-layout>
          </v-container>
        </v-card>

        <v-card>
          <v-container
            fluid
            grid-list-lg
          >
          <v-layout row wrap>
            <v-flex xs4>
              <v-img
                src="https://d19fbfhz0hcvd2.cloudfront.net/NDF/wp-content/uploads/2014/11/event_posters12.jpg"
                aspect-ratio="0.667"
                height='274'
                contain
              ></v-img>
            </v-flex>
            <v-flex xs4>
              <v-card-title><h3>Chromeo</h3></v-card-title>
              <v-card-text>
                <p>21 Desember 2019, 18.00PM</p>
                <p>Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</p>
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              <div style="margin: 100px;">
                <v-btn large dark color="blue">Event Report</v-btn><br>
                <v-btn large dark color="#f75611">Event Details</v-btn><br>
              </div>
            </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </div>
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
        page: 'addevent',
        products: [],
        pendingTrans: [],
        onprocessTrans:[],
        doneTrans: [],
        categories: [
        'Playing Cards',
        'Close Up Magic',
        'Mentalism',
        'Money & Coin',
        'Video & Book'
        ],
        productName: "",
        productPrice: "",
        productDescription: "",
        productCategory: "",
      }
    },
    props: ['url'],
    methods: {

    },
    created() {

    },
    mounted() {

    }
  }
</script>
