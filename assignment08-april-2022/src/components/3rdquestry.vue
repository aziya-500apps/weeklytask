<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="enter firstname:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.firstname"
          placeholder="Enter your firstname"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="enter lastname" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastname"
          placeholder="Enter your lastname"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>

     <center><table border=2px>
          <thead><tr><th>firstname</th><th>lastname</th></tr></thead>
          
    </table></center>


    <p id="id"></p>
  </div>
</template>


<script>
export default {
  name: "ThreE",

  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit() {
      document.getElementById("id").innerHTML = JSON.stringify(this.form);
    },
    onReset() {
      // Reset our form values
      this.form.firstname = "";
      this.form.lastname = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    create(){
        var x=document.getElementById("id1").value 
        document.getElementById("id").innerHTML=x;

    },
    delete(){

    },
    add(){

    }
  },
};
</script>