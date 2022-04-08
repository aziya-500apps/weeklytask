
<template>
  <div>
    <b-table striped hover :items="posts" :fields="fields"> </b-table>
    {{ posts }}
  </div>
</template>

<script>
export default {
  name: "QueS5",

  data() {
    return {
      posts: " ",

      fields: ["name", "domains", "state-province","web-pages"],
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch("http://universities.hipolabs.com/search?country");

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






