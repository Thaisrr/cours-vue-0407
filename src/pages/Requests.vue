<template>
    <h1>Requêtes API</h1>

    <div>
      <textarea v-model="new_joke"></textarea>
      <button @click="post">Save</button>
    </div>


    <template v-if="jokes && jokes.length > 0" >
      <p v-for="{id, joke} of jokes" :key="id">{{joke}}</p>
    </template>
    <p v-else>Chargement...</p>

  <button @click="getJokes(1)">Next</button>
  <button @click="getJokes(-1)">Previous</button>
</template>

<script>
import JokeService from "@/utils/services/JokeService";

export default {
  name: "RequestsComponent",
  data() {
    return {
      jokes: undefined,
      new_joke: '',
      single_joke: ''
    }
  },
  methods: {
    async getJokes(param) {

      this.jokes =  await JokeService.getAll(param)
    },
    async post() {
      await JokeService.create(this.new_joke)
      this.new_joke = '';
      this.getJokes();
    }
  },
  mounted() {
    this.getJokes();
  }
}
</script>

<style scoped>

</style>