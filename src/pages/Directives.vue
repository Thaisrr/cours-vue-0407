<template>

  <h1>Directives</h1>

  <h2>Affichage condionnel</h2>

  <button @click="toggleLogged">{{ is_logged? 'Déconnexion' : 'Connexion' }}</button>

  <div v-if="is_logged">
    <hr>
    <p>Bienvenue Bidule</p>
    <button @click="toggleLogged">Déconnexion</button>
  </div>

  <div v-else-if="!is_logged">
    <hr>
    <p>Vous n'êtes pas connecté.e</p>
    <button @click="toggleLogged">Connexion</button>
  </div>

  <div v-else>On ne passe jamais ici</div>

  <p v-show="is_logged">Ce message ne s'affiche que si vous êtes loggé.e !</p>

  <h2>Rendu de listes</h2>

  <ul>
    <li v-for="(fruit, index) in fruits" :key="fruit" >{{index}} : {{fruit}}</li>
  </ul>

  <ul>
    <li v-for="i in 10" :key="'p' + i">Faites {{i}} pompe(s) !</li>
  </ul>

  <ul>
    <li v-for="(value, key) in user" :key="key">{{key}} : {{value}}</li>
  </ul>

  <template v-for="i in 10" :key="'t' + i">
    <p v-if="i % 2 === 0">{{ i }}</p>
  </template>


  <h2>Affichage</h2>

  <p v-text="message"></p>
  <!-- similaire à {{ message }} -->

  <p v-html="span"></p>

  <p v-pre>En vue, on interpole les donnée avec des {{ des balises moustaches }}</p>

  <p v-once>{{ is_logged? 'Vous êtes connecté.e' : "Vous n\' êtes pas connecté.e" }}</p>



</template>



<script>
export default {
  name: "DirectivesComponent",
  data: function () {
    return {
      is_logged: false,
      fruits: ['Abricots', 'Courgette', 'Mangue', 'Fraises', 'Framboises'],
      user: {name: 'Jean Michel', age: 110, job: 'Mage Noir'},
      message: 'Hello World',
      span: '<span style="color: forestgreen">Raw HTML</span>'
    }
  },
  methods: {
    toggleLogged: function () {
      this.is_logged = !this.is_logged;
    }
  }
}
</script>

<style scoped>

span {
  background: orange;
}

</style>