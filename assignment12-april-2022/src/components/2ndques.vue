<template>
  <div class="overflow-auto">
    <b-form-input v-model="text" placeholder="Enter country" required>
    </b-form-input>

    <button @click="getData()">Submit</button>
    
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="posts"
      :per-page="perPage"
      :current-page="currentPage"
      small
      :fields="fields"
    ></b-table>
  </div>
</template>
<script>
export default {
  name: "queSecond",

  data() {
    return {
      perPage: 5,
      currentPage: 1,
      posts: "",
      fields: ["name", "domains", "state-province", "web_pages", "country"],
    };
  },
  methods: {
    async getData() {
      try {
        let response = await fetch(
          "http://universities.hipolabs.com/search?country=" + this.text
        );
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    rows() {
      return this.posts.length;
    },
  },
  created() {
    this.getData();
  },
};
</script>



<!-- yarn add jw-vue-pagination-->