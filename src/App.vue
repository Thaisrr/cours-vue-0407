<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--<HelloWorld/> -->
  <!--<DirectivesComponent/> -->
  <ComputedComponent/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import DirectivesComponent from "@/components/Directives";
import ComputedComponent from "@/components/Computed";

export default {
  name: 'App',
  components: {
    ComputedComponent,
  //  DirectivesComponent,
    //HelloWorld
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
