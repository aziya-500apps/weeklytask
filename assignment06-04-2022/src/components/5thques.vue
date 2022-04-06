<template>
  <div id="class">
    Firstname:<input type="text" v-model="firstname" /><br />
    Lastname:<input type="text" v-model="lastname" /><br />
    <button @click="fun1()">clicktogetname</button>
    <h1>{{ firstname }}{{ lastname }}</h1>
  </div>
</template>

<script>
export default {
  name: "FifthQ",

  data() {
    return {
      firstname: "",
      lastname: " ",
      fullname:" ",
    };
  },
  methods:{
    fun1(){
    this.firstname="Mantra",
    this.lastname ="Technologies",
    this.fullname=this.firstname+this.lastname
    return this.fullname
    }

  },
  computed: {
    getname: function (firstname, lastname) {
      return firstname + " " + lastname;
    },
  },
};
</script>




