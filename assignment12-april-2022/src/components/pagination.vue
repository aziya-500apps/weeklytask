<template>
  <div class="overflow-auto">
    <b-form-select
      v-model="value"
      :options="countries"
      :current-page="currentPage"
      :per-page="perPage"
      prev-text="Prev"
      next-text="Next"
    ></b-form-select>

    <b-container class="bv-example-row">
      <b-card>
        <b-card-text
          v-for="data1 in pageShowData"
          :key="data1.id"
          :per-page="perPage"
          :current-page="currentPage"
          small>
          <b-card>
            <b-row>
              <b-col>University name:{{ data1.university_name }}</b-col>
            </b-row>

            <div class="w-100"></div>

            <b-row>
              <b-col>Domain:{{ data1.domains }}</b-col>

              <b-col>State-province:{{ data1.state_province }}</b-col>

              <b-col>Web-pages{{ data1.website_url }}</b-col>
            </b-row>
          </b-card>
        </b-card-text>
      </b-card>
    </b-container>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="pageSize"
      aria-controls="my-table"
    >
    </b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
    
    <button @click="getData()">Submit</button>
  </div>
</template>


<script>
const { getNames } = require("country-list");

export default {
  name: "rtgR",

  data() {
    return {
      pageSize: 5,

      currentPage: 1,

      items: " ",

      countries: [],
    };
  },

  watch: {
    // whenever question changes, this function will run

    currentPage(newValue, oldValue) {
      console.log("newValue", newValue);

      console.log("oldValue", oldValue);

      this.pagedata(newValue);
    },
  },

  methods: {
    async pagedata(page) {
      console.log(page);

      this.pageShowData = [];

      // this.pageShowData=this.items.slice(((1-1)*3),((1*3)));

      this.pageShowData = this.items.slice(
        (page - 1) * this.pageSize,
        page * this.pageSize
      );
    },

    async getData() {
      try {
        let response = await fetch(
          "http://universities.hipolabs.com/search?country=" + this.value
        );

        this.items = await response.json();

        this.pagedata(1);

        //this.value=this.posts;
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    let countries = getNames();

    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });

    if (this.countries.length) this.value = this.countries[0].text;
  },

  computed: {
    rows() {
      return this.items.length;
    },
  },

  created() {
    this.getData();
  },
};
</script>