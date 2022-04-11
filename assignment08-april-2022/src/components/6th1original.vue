<template>
  <div class="cascading-dropdown">
    <div class="dropdown">
      
      <span>Country:</span>
      <select v-model="selectedCountry" @change="onChangeCountry">
        <option value="">Select a Country</option>
        <option
          v-for="(country, index) in listCountry"
          :value="country.country_name"
          :key="index">
          {{ country.country_name }}
        </option>
      </select>
    </div>
    <div class="dropdown">
      <span>State:</span>
      <select
        :disabled="listState.length == 0"
        v-model="selectedState"
        @change="onChangeState"
      >
        <option value="">Select a State</option>
        <option
          v-for="(state, index) in listState"
          :key="index"
          :value="state.state_name"
        >
          {{ state.state_name }}
        </option>
      </select>
    </div>
    <div class="dropdown">
      <span>State:</span>
      <select :disabled="listCities.length == 0" v-model="selectedCity">
        <option value="">Select a City</option>
        <option
          v-for="(city, index) in listCities"
          :key="index"
          :value="city.city_name"
        >
          {{ city.city_name }}
        </option>
      </select>
    </div>
    <p v-if="selectedCountry">Selected Country - {{ this.selectedCountry }}</p>
    <p v-if="selectedState">Selected State - {{ this.selectedState }}</p>
    <p v-if="selectedCity">Selected City - {{ this.selectedCity }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      listCountry: [],
      listState: [],
      listCities: [],
      selectedCountry: "",
      selectedState: "",
      selectedCity: "",
      authToken: "",
    };
  },
  created() {
    this.generateAccessToken();
  },
  methods: {
    generateAccessToken() {
      axios
        .get("https://www.universal-tutorial.com/api/getaccesstoken", {
          headers: {
            Accept: "application/json",
            "api-token":
              "jAJuES2nNREYu0qOJ9Sy6bydr_LPxmjv0jUAR-oEuXozRP_CjqPqRgp1mCPaNh8VPZo",
            "user-email": "itjebasuthan@gmail.com",
          },
        })
        .then((res) => {
          this.authToken = res.data.auth_token;
          this.loadCountry();
        });
    },
    loadCountry() {
      axios
        .get("https://www.universal-tutorial.com/api/countries", {
          headers: {
            Authorization: `Bearer ${this.authToken}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          this.listCountry = res.data;
        });
    },
    onChangeCountry() {
      axios
        .get(
          `https://www.universal-tutorial.com/api/states/${this.selectedCountry}`,
          {
            headers: {
              Authorization: `Bearer ${this.authToken}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          this.listState = res.data;
        });
    },
    onChangeState() {
      axios
        .get(
          `https://www.universal-tutorial.com/api/cities/${this.selectedState}`,
          {
            headers: {
              Authorization: `Bearer ${this.authToken}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          this.listCities = res.data;
        });
    },
  },
};
</script>
