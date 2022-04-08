<template>
  <div>
      <form name="form1">
          <label for="" name="name1">firstname:</label>
          <input type="text" name="name1" id="id1"><br>
          <label for="" name="name2">lastname:</label>
          <input type="text" name="name2" id="id2"><br>
          <button @click="hello()">addbutton</button>
          <p id="id3"></p>
      </form>
      <table border=2px>
          <thead><tr><th>firstname</th><th>lastname</th></tr></thead>
      </table>
  </div>
</template>
<script>
export default {
    name:"QueS3",
    data(){
        return{
            Names:[{firstname:"Agile",lastname:"CRM"}]

        }
    },
    methods:{
        hello(){
           var data1= document.getElementById("id1").value;
           var data2= document.getElementById("id2").value;
           var data3=String(data1+"      "+data2)
           document.getElementById("id3").innerHTML=data3;
           


        }

    }

};
</script>
<!--
3.CRUD operations
- Create simple form with first name and last name inputs with
add button
- Show created data in the table with columns first name and
last name
- Add update button for every row and if user clicks on that
button show prefill that row data in form and update the names
- Add delete button and delete the user if clicks on button
Names = [{firstname:”Agile”,lastname:”CRM”}]-->