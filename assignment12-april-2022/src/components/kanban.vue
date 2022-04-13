<template>
  <div>
    <h1 align="center">Country List</h1>

    <b-container>
      <b-form-select v-model="value" :options="countries"></b-form-select
      ><br /><br />

      <b-button variant="dark" @click="getData">Search</b-button>

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      >
      </b-pagination>

      <b-row cols-md="7">
        <b-table
          id="my-table"
          :per-page="perPage"
          :current-page="currentPage"
          striped
          hover
          :items="items"
        >
          <b-col>
            <p>university_name: {{ value.university_name }}</p></b-col
          >

          <b-col
            ><p>domains: {{ value.domains }}</p></b-col
          >

          <a :href="value.website_url" target="_blank">{{
            value.website_url
          }}</a>

          <p>website_url: {{ value.website_url }}</p>
        </b-table>
      </b-row>
    </b-container>

    <b-container mt="5">
      <div class="row mt=3" id="mytable">
        <div class="col-md-3">
          <div class="p-2 alert alert-secondary">
            <h3>University Name</h3>

            <draggable class="list-group kanban-column" group="tasks">
              <div
                class="list-group-item"
                v-for="value in countries"
                :key="value.name"
              >
                <!-- <b-pagination


v-model="currentPage"


:total-rows="rows"


:per-page="perPage"


aria-controls="">


</b-pagination> -->

                <b-card
                  v-for="value in items"
                  :key="value.domains"
                  class="mb-2"
                >
                  <b-card-text
                    >university_name:-- {{ value.name }}
                  </b-card-text>

                  <p>domains:--{{ value.domains }}</p>

                  <p @click="redirect(value.website_url)">
                    website_url:--{{ value.website_url }}
                  </p>
                </b-card>
              </div>
            </draggable>
          </div>
        </div>

        <!-- <div class="col-md-3">



<div class="p-2 alert alert-primary">



<h3>ArrBackLog</h3>



<draggable class="list-group kanban-column" :list="arrInprogress" group="tasks">



<div class="list-group-item" v-for="element in arrInprogress" :key="element.name">



{{element.name}}



</div>



</draggable>



</div>



</div> -->

        <div class="col-md-3">
          <div class="p-2 alert alert-success">
            <h3>ArrBackLog</h3>

            <draggable
              class="list-group kanban-column"
              :list="arrTested"
              group="tasks"
            >
              <div
                class="list-group-item"
                v-for="element in arrTested"
                :key="element.name"
              >
                {{ element.name }}
              </div>
            </draggable>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>




<script>
const { getNames } = require("country-list");

import draggable from "vuedraggable";

export default {
  name: "QuE1",

  components: {
    draggable,
  },

  data() {
    return {
      perPage: 3,

      currentPage: 1,

      value: "",

      items: [],

      countries: [],
    };
  },

  mounted() {
    let countries = getNames();

    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });

    //if (this.countries.length) this.value = this.countries[0].text;
  },

  methods: {
    redirect(value) {
      window.open(value, "_blank");
    },

    async getData() {
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=" + this.value,

        {
          method: "GET",
        }
      );

      const responseText = await response.json();

      this.items = responseText.map((row) => {
        return {
          university_name: row.name,

          domains: row.domains,

          website_url: row.web_pages[0],
        };
      });
    },
  },

  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>


