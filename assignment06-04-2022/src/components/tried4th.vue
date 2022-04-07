<template>
  <div>
    <b-table striped hover :items="posts.entries" :fields="fields"> </b-table>

    {{ posts }}
  </div>
</template>


<script>
//var axios = require("axios").default;

export default {
  name: "queS4",

  data() {
    return {
      posts: " ",

      fields: ["API", "Description", "Category"],
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch("https://api.publicapis.org/entries");

        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },

  /*mounted() {

axios

.get("http://www.json-generator.com/api/json/get/bSldINskRK")

.then(response=>(this.posts=response))


}*/

  created() {
    this.getData();
  },
};
</script>





<!--const getData = () => {     // return promise object when function is executed     
return new Promise((resolve, reject) => {         // Using axios to fetch API URL         
axios             .get("https://api.publicapis.org/entries")             .then((response) => {                
     // resolve when response is received                 resolve(response.data);             })             
     .catch((error) => {                 // reject when error is occured                 reject(error);            
      });     }); } // Hit API and fetch data through function var response = getData() response.then((data) => {     
          console.log("response", data) }).catch((err) => {     console.log(err.toJSON().message) })
          -->



