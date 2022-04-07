<template>
  <div id="app">
    <router-view/>
    <!--<six ref="msg" msg="Mantra Technologies">{{msg}}<six/>-->
    <six ref="name" name="Mantra Technologies"></six>
      <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import six from "./components/6thques.vue"
export default {
  name: 'App',
  components: {
    six,

  },
  mounted:function(){
    
    this.$refs.six.name
  }
   
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
