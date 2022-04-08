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

        
      </table>
    </center>
  </div>
</template>
<script>
export default {
  name: "QueS4",
  data() {
    return {
      array:[ 'orange', 'red', 'blue', 'black', 'white' ]
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

<!--4. const list = [ 'orange', 'red', 'blue', 'black', 'white' ]
Add search for above list-->