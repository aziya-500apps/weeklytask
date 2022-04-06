<template>
  <div id="class">
    Firstname:<input type="text" v-model="firstname" /><br />
    Lastname:<input type="text" v-model="lastname" /><br />
    <button @click="fun()">clickhere</button>
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
      fullname:" "
    };
  },
  methods:{
    fun(){
      this.firstname="Mantra",
      this.secondname="Technologies",
    
      this.fullname=this.firstname+this.secondname
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




