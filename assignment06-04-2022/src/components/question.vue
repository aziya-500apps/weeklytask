<template>
  <div>
    <b-table striped hover :items="posts.entries" 
    :fields="fields"> </b-table>

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







