<template>
  <div id="class">
    <form id="id1">
      <p>{{ word }}</p>
      <p>{{ word.length }}</p>
      <input type="text" name="message" v-model="word" />
    </form>
  </div>
</template>
<script>
export default {
  name: "SecondQuestion",
  data() {
    return {
      word: " ",
    };
  },
};
</script>




