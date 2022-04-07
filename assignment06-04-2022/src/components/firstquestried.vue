<template>
  <div>
    <center>
      <input
        type="text"
        name="search"
        id="search"
        v-on:keyup="search()"
        placeholder="search .."
      />
    </center>

    <center>
      <table id="mytable">
        

        <tr>
          <td>{{ array[0] }}</td>
        </tr>

        <tr>
          <td>{{ array[1] }}</td>
        </tr>

        <tr>
          <td>{{ array[2] }}</td>
        </tr>

        <tr>
          <td>{{ array[3] }}</td>
        </tr>

        <tr>
          <td>{{ array[4] }}</td>
        </tr>

        <tr>
          <td>{{ array[5] }}</td>
        </tr>
      </table>
    </center>

    
  </div>
</template>


<script>
export default {
  name: "queS12",

  data() {
    return {
      array: ["agile", "crm", "mantra", "technologies", "500apps", "infinity"],

  
    };
  },

  methods: {
 

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
    },
  },
};
</script>