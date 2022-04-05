
<template>
  <div>
    <p @click="fun()">
      p tag : Under Mantra technologies We have 500apps and Agile CRM
    </p>

    <textarea id="demo1">
        Hello javascript
</textarea>
  </div>
</template>

<script>
export default {
  name: "helloWorld",

  data() {
    return {
      textdata: "",
    };
  },

  methods: {
    fun() {
      this.textdata = "" + document.getElementById("demo1").value;

      document.write(this.textdata);
    },
  },
};
</script>



