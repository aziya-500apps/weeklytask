<template>
  <div>
    <b-form-input v-model="text" placeholder="Field to Enter letters"></b-form-input>
    <b-button @click="uppercase()">Click</b-button>
    <b-form-input v-model="result" placeholder="Display in Uppercase"></b-form-input>
  </div>
</template>
<script>
export default {
  name: "producT",

  data() {
    return {
      text: "",
      result: "",
    };
  },
  watch: {
    text: {
      handler(newdata, olddata) {
        console.log("oldValue", olddata);
        console.log("newValue", newdata);
      },
    },
  },
  methods: {
    uppercase() {
      this.result = this.text.toUpperCase();
    },
  },
};
</script>



