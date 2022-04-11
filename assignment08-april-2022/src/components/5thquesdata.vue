
<template>
  <div>
      <b-form-input v-model="value" placeholder="enter country name" required></b-form-input>
      
      <button @click="getData()">click button</button>
      <!--<b-table striped hover :items="posts" :fields="fields"> </b-table>-->
      <b-card>
        <b-card-text v-for="data1 in posts" :key=data1.id>
           <b-row>
                  <b-col>{{data1.name}}</b-col>
                  <b-col>{{data1.domains}}</b-col>
                   <b-col>{{data1.web_pages}}</b-col>
           </b-row>
        </b-card-text>
      </b-card>
  </div>
</template>
<script>
export default {
  name: "QueS5",

  data() {
    return {
      posts:" ",
      fields: ["name", "domains", "state-province","web-pages"],
    };
  },
  methods: {
    async getData() {
      try {
        let response = await fetch("http://universities.hipolabs.com/search?country="+this.value);
        this.posts = await response.json();
        //this.value=this.posts;
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






