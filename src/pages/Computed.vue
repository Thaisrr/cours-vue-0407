<template>
  <h1>Computed et Watchers</h1>

  <a href="#watchers">Watchers</a>

  <h2>V-Model</h2>

  <p>
    <label for="name1">Nom</label>
    <input  id="name1" :value="nom" @input="event => this.nom = event.target.value">
  </p>

  <p>
    <label for="name">Nom</label>
    <input  id="name" v-model.trim="nom">
  </p>

  <p>Vous vous appelez : {{ nom }}</p>


  <p>
    <label>ça va ?</label>
    <input type="checkbox" v-model="is_ok">
  </p>
  <p>Réponse : {{is_ok? 'oui' : 'non'}}</p>



  <h3>Fruits préférés : {{favorites_fruits}} </h3>

  <p v-for="fruit of fruits" :key="fruit">
    <input type="checkbox" :id="fruit" :value="fruit" v-model="favorites_fruits"/>
    <label :for="fruit">{{fruit}}</label>
  </p>

  <p>{{user}}</p>


  <h2>Computed</h2>

  <textarea v-model="message"></textarea>

  <p>Mon message : </p>
  <p>{{ getPal()}}</p>
  <p>{{ palindrome }}</p>

  <p>{{fullname}}</p>
  <p>Firstname: {{firstname}}</p>
  <p>Lastname: {{lastname}}</p>
  <label>Modifier le nom : </label>
  <input v-model="fullname"/>


  <h2 id="watchers">Watchers: </h2>

  <p>Fruit : {{ fruit }}</p>

  <p v-for="(value, key) in fruit" :key="key">
    <label :for="key + 'key'">{{key.toUpperCase()}}</label>
    <input :id="key + 'truc'" v-model="fruit[key]"/>
  </p>

  <button @click="addFruit">Ajouter un fruit</button>



</template>

<script>
export default {
  name: "ComputedComponent",
  data: function () {
    return {
      message: 'Bonjour le monde !',
      nom: 'Toto',
      is_ok: true,
      favorites_fruits: [],
      fruits: ['Abricots', 'Brocolis', 'Courgettes', 'Banane', 'Epinards'],
      user: {name: 'Jane Doe'},
      firstname: 'Jane',
      lastname: 'Doe',
      fruit: {name: 'Framboise', tree: 'Framboisier', color: 'red'}
    }
  },
  methods: {
    setName(event) {
      this.nom = event.target.value
    },
    getPal() {
      console.log('In get Pal - méthode')
      return this.message.toUpperCase().split('').reverse().join('');
    },
    addFruit() {
      this.fruits.push('Nouveau fruit');
      console.log(this.fruits)
    }
  },
  computed: {
    palindrome: function () {
      console.info('[computed] - palindrome')
      return this.message.toUpperCase().split('').reverse().join('');
    },
    fullname: {
      get() {
        return `${this.firstname} ${this.lastname}`
      },
      set(value) {
        [this.firstname, this.lastname] = value.split(' ')
      }
    }
  },
  watch: {
    nom(new_value, old_value) {
      console.info(`Nom a été modifié; Nouvelle valeur : ${new_value}, ancienne valeur : ${old_value}`)
    },
    fruit: { // objet
      handler(new_val, old_val) {
        // Ici, quand on utilise deep : true, les "old value" et "new value" ne fonctionneront pas correctement
        // et seront toujours égales
        console.warn(`Fruit a été modifié`, new_val, old_val)
      },
      deep: true
    },
    fruits: { // tableau
      handler() {
        console.info('Mon tableau de fruit à été modifié')
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>