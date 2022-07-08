<template>
  <h1>Pinia</h1>

  <p>Counter : {{ counter }}</p>

  <p>
    <button @click="increment">++</button>
  </p>

  <p>{{favorite}}</p>

  <input v-model="favorite">

  <p>Taille panier : {{size_panier}}</p>



  <ul>
    <li v-for="n in 10" :key="n"  @click="coladaStore.addToPanier('Furby')">Furby  {{n}} </li>
  </ul>
</template>

<script>
import {mapState, mapWritableState, mapStores, mapActions} from "pinia";
import {useColadaStore} from "../../store/colada";

export default {
name: "PiniaComponent",
  computed: {
    ...mapStores(useColadaStore),
    ...mapState(useColadaStore, ['counter', 'size_panier']),
    ...mapWritableState(useColadaStore, {
      favorite : 'cocktail'
    })
  },
  methods: {
    ...mapActions(useColadaStore, ['increment'])
  }
}
</script>

<style scoped>

</style>