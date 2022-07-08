<template>
  <h1>{{message}}</h1>

  <p>
    <button @click="sayHello">Hello</button>
  </p>
  <p>
    <button @click="changeMessage">Changer Message</button>
  </p>

  <p>{{message_ref}}</p>

  <button @click="changeRef">Changer la reference</button>

  <p>Compteur : {{state.counter}}</p>
  <p>Double compteur : {{doubled_counter}}</p>

  <button @click="increment">Incrémenter</button>
</template>

<script setup>
import {onMounted, ref, reactive, computed} from 'vue';

let message = 'Coucou';
function sayHello() {
  alert('Hello')
}

function changeMessage() {
  message = 'Bidule'
}

const message_ref = ref('Un super message');

function changeRef() {
  message_ref.value = 'Nouvelle valeur'
}

const state = reactive({counter: 0})

function increment() {
  state.counter++
}

const doubled_counter = computed(() => state.counter * 2);


onMounted(() => {})

</script>

<style scoped>

</style>