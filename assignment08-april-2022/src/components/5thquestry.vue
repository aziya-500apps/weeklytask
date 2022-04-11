<template>
  <div>
    
    <div>
      <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    </div>
    <b-button @click="getData()">Click Me!</b-button>
    <div>
      {{ searchData.data }}

      <table border="2px" align="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
var axios = require("axios").default;
export default {
  name: "sampleApis",
  data() {
    return {
      options: {
        method: "POST",
        url: "http://universities.hipolabs.com/search?country",
        
        data: { search: "" },
      },
      text: "",
      searchData: {},
    };
  },
  methods: {
    async getData() {
      this.options.data.search = this.text;
      this.searchData = await axios.request(this.options);
    },
  },
};
</script>