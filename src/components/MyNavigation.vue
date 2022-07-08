<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{name: 'pres'}">Présentation</router-link>
      </li>
      <li>
        <router-link :to="{name: 'directives'}">Directives</router-link>
      </li>
      <li>
        <router-link :to="{name: 'computed', hash: '#watchers'}">Computed</router-link>
      </li>
      <li>
        <router-link :to="{name: 'parent'}">Parent</router-link>
      </li>
      <li>
        <router-link :to="{name: 'form'}">Formulaires</router-link>
      </li>
      <li>
        <router-link :to="{name: 'fb'}">FormBuilder Test</router-link>
      </li>
      <li>
        <router-link :to="{name: 'life'}">Cycle de Vie</router-link>
      </li>
      <li>
        <router-link :to="{name: 'req'}">Requêtes</router-link>
      </li>
      <li>
        <router-link :to="{name: 'router', params: {title : 'Mon Paramètre'}}">Router</router-link>
      </li>
      <li>
        <router-link :to="{name: 'secret'}">[Bloquée] Secret</router-link>
      </li>
      <li>
        <router-link :to="{name: 'vuex'}">Vuex</router-link>
      </li>
      <li>
        <router-link :to="{name: 'pinia'}">Pinia</router-link>
      </li>
      <li>
        {{cocktail}}
      </li>
    </ul>
  </nav>
</template>

<script>
import {mapState} from "pinia";
import {useColadaStore} from "../../store/colada";

export default {
name: "MyNavigation",
  computed: {
    ...mapState(useColadaStore, ['cocktail'])
  }
}
</script>

<style>

.router-link-active:link, .router-link-active:visited {
  border: solid indigo;
}

.router-link-exact-active:link, .router-link-exact-active:visited  {
  color: green;
}

</style>