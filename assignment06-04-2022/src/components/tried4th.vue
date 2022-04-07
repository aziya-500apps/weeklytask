<template>
  <div>
    <b-table striped hover :items="posts" :fields="fields"> </b-table>
    {{posts}}
  </div>
</template>
<script>
//var axios = require("axios").default;

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
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>