<template>
  <div>
    <table border="2px">
      <thead>
        <tr>
          <th>Arrow function</th>
          <th>Normal function</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Arrow functions no need of "function" keyword</td>
          <td>In Normal function we have to use "function" keyword</td>
        </tr>
        <tr>
          <td>Arrow function syntax ()=>{}</td>
          <td>Normal function syntax function functionname(){}</td>
        </tr>
      </tbody>
    </table>
    <button @click="func1()">normalfunction</button>
    <button @click="func2()">arrowfunction</button>
  </div>
</template>
<script>
export default {
  name: "SeveN",
  methods: {
    func1(a = 2) {
      if (a % 2 == 0) {
        console.log("It is an even number");} 
        else {
        console.log("It is an odd number");}
    }
  },
    data() {
      return {
        func2: (num = 5) => {
          if (num%2==0) {
            console.log("It is an even number")}
        else{
            console.log("It is a odd number")}
        }}
    },
  }
</script>
