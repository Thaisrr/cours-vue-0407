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
    </ul>
  </nav>
</template>

<script>
export default {
name: "MyNavigation"
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