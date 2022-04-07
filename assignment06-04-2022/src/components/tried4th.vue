<template>
  <div>
    <b-table striped hover :items="posts" :fields="fields"> </b-table>
    {{posts}}
  </div>
</template>
<script>
export default {
  name: "TrieD4",
  data() {
    return {
      posts: [],
      fields: ["API", "Description", "Category"],
    };
  },
  methods: {
    async getData() {
      try {
        let response = await fetch("https://api.publicapis.org/entries");
        this.posts = await response.json();
      } 
      catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<!--const getData = () => {     // return promise object when function is executed     
return new Promise((resolve, reject) => {         // Using axios to fetch API URL         
axios             .get("https://api.publicapis.rg/entries")             .then((response) => {                
     // resolve when response is received                 resolve(response.data);             })             
     .catch((error) => {                 // reject when error is occured                 reject(error);            
      });     }); } // Hit API and fetch data through function var response = getData() response.then((data) => {     
          console.log("response", data) }).catch((err) => {     console.log(err.toJSON().message) })-->