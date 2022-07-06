<template>
    <header>
      <slot name="title"></slot>
      <button>Close</button>
    </header>
    <hr>
    <main>
      <slot name="main"></slot>
    </main>
    <hr>
    <footer>
      <slot name="button"></slot>
      <button>Close</button>
    </footer>
</template>

<script>
export default {
  name: "SuperModal"
}
</script>

<style scoped>

</style>