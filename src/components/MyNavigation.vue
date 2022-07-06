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
    </ul>
  </nav>
</template>

<script>
export default {
name: "MyNavigation"
}
</script>

<style scoped>

</style>