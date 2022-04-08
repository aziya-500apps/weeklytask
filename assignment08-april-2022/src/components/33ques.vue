<template>
    <div>
        <h1>Question 3</h1>
        <b-table :items="Names" :fields="fields"></b-table>
        <b-form-input id="id1" v-model="text" placeholder="Enter first name"></b-form-input>
        <b-form-input id="id2" v-model="text" placeholder="Enter last name"></b-form-input>
        <b-button @click="add()">AddButton</b-button><br><br>
        <b-button @click="remove()">Deletebutton</b-button>
        </div>
</template>
<script>
 export default{
        name:"QueS3",
        data(){
             return{
               Names : [{firstname:"Agile",lastname:"CRM"}],
              fields:['firstname','lastname'],
            }
        },
        methods: {
              add(){
                  this.Names.push({firstname:(document.getElementById("id1").value),lastname:(document.getElementById("id2").value)});
              },
              remove(){
                  this.Names.pop();
                  }
              }
        }
    
</script>



