<template>

  <h1>Vue Router</h1>
  <h2>{{titre}}</h2>


 <router-link :to="{name: 'router', params: { title : 'Param2'}}">Param 2</router-link>
 <router-link :to="{name: 'router', params: { title : 'Param1'}}">Param 1</router-link>


  <h2>Nested routes  : </h2>

  <router-link :to="{name: 'v1', query: {msg : 'Hello World'}}">View 1</router-link>
  <router-link :to="{name: 'v2', query: {msg : 'Bonjour le monde'}}">View 2</router-link>

  <router-view></router-view>


  <h2>Navigation depuis le script</h2>


  <p>
    <button @click="redirect">Redirection</button>
    <button @click="goBack">Back</button>
    <button @click="goForward">Suivant</button>
  </p>

  <h2>Encore des liens : </h2>

  <p>Id : {{id}}</p>

  <router-link :to="{name: 'router', params: { id : 'id1'}}">ID 1</router-link>
  <router-link :to="{name: 'router', params: { id : 'id2'}}">ID 2</router-link>
  <router-link :to="{name: 'router', params: { id : 'id3'}}">ID 3</router-link>
  <router-link :to="{name: 'router', params: { id : 'id4'}}">ID 4</router-link>


  <h2>Guards</h2>

  <button v-if="!logged" @click="login">Connexion</button>
  <button v-else @click="logout">Déconnexion</button>

</template>

<script>
export default {
  name: "AboutRouter",
  data() {
    return {
      titre : 'Nope',
      logged: !!localStorage.getItem('token')
    }
  },
  props: {
    id: String
  },
  methods : {
    redirect() {
   //   this.$router.push('presentation');
      this.$router.push({name: 'pres'}); // Nouvelle entrée dans l'historique
     // this.$router.replace({name: ''}) // Remplace l'entrée dans l'historique
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    },
    login() {
      localStorage.setItem('token', 'coucou');
      this.logged = true;
    },
    logout() {
      localStorage.clear();
      this.logged = false;
    }
  },
  created() {
    console.info(this.$route)
    this.titre = this.$route?.params.title;
    this.$watch(
        () => this.$route?.params,
        (to, prev) => {
          console.info(`To : ${to.title} --- Previous : ${prev.title}`);
          this.titre = to.title
        }
    );
   // unwatch();
  }

}
</script>

<style scoped>

</style>