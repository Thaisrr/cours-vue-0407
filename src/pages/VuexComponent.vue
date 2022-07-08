<template>
  <h1>Vuex</h1>

  <p>Username : {{ username }}</p>
  <p>UpperName {{uppername}}</p>
  <p>Character : {{character}}</p>
  <p>{{joke}}</p>

  <p>
    <button @click="increment">Counter : {{counter}} </button>
  </p>
</template>

<script>
import {mapState, mapGetters, mapMutations} from "vuex"
export default {
  name: "VuexComponent",
  computed: {
    ...mapState(['username', 'counter']),
    ...mapGetters(['uppername']),
   /* username: function () {
      return this.$store.state.username
    },
    counter: function () {
      return this.$store.state.counter;
    },
    uppername: function () {
      return this.$store.getters.uppername;
    },
    */
    character: function () {
      return this.$store.getters.character(2);
    },

    joke: function () {
      return this.$store.state.joke;
    }
  },
  methods: {
    ...mapMutations(['increment']),
  /*  increment: function () {
      this.$store.commit('increment');
    }*/
  }
}
</script>

<style scoped>

</style>