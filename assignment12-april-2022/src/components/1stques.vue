
<template>
  <div>
      <b-form-input v-model="value" placeholder="enter country name" required></b-form-input>
     
      <button @click="getData()">click button</button>
          <center><input type="text" name="search" id="search" v-on:keyup="search()" placeholder="search .."/></center>
   
      <!--<b-table striped hover :items="posts" :fields="fields"> </b-table>-->
      <table border=2px id="mytable">
        <thead><tr><td>name</td><td>domains</td><td>state-province</td><td>web_pages</td></tr></thead>
        <tbody> <tr v-for="data1 in posts" :key="data1.id">
                      <td>{{data1.name}}</td>
                      <td>{{data1.domains}}</td>
                      <td>{{data1.web_pages}}</td>
                      <td>{{data1.country}}</td> 
           </tr></tbody>
      </table>
  </div>
</template>
<script>
export default {
  name: "QueS5",
  data() {
    return {
      posts:" ",
      fields: ["name", "domains","web_pages","country"],
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
    search() {
      var searchbar, filter, table, tr, td, i, txt;
      searchbar = document.getElementById("search");
      filter = searchbar.value.toUpperCase();
      table = document.getElementById("mytable");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txt = td.textContent || td.innerText;
          if (txt.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  },
  created() {
    this.getData();
  }
};
</script>





