
<template>
  <div>
    {{ datagetting }}
  </div>
</template>
<script>

var axios = require("axios").default;

export default {
  name: "FourTh",
  data() {
    return {
      datagetting:" ",
    };
  },
  mounted() {
    axios
      .get("https://api.zippopotam.us/us/33162")
      .then((response) => (this.datagetting = response));
  },
};
</script>
