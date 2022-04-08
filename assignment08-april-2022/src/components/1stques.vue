<template>
  <div>
    <button @click="func()">Click</button>
    <p>{{ users }}</p>
    <p id="id"></p>
  </div>
</template>
<script>
export default {
  name: "QueS1",
  data() {
    return {
      users: [
        { name: "500apps", id: 1 },
        { name: "Technologies", id: 2 },
        { name: "Agile", id: 3 },
        { name: "Mantra", id: 4 },
        { name: "Clockly", id: 5 },
        { name: "CRM", id: 6 },
        { name: "500apps", id: 7 },
      ],
      reverse1: "",

      so: "Aziya",
    };
  },
  methods: {
    func() {
      this.reverse1 = this.users.reverse(); 
    },
  },
};
</script>





