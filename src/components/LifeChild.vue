<template>
    <h2>Child</h2>
</template>

<script>
export default {
name: "LifeChild",
  data() {
    return {
      a: 'Child A'
    }
  },
  beforeCreate() {
    console.log('[Enfant]  Before create', this.a)
  },
  created() {
    console.log('[Enfant] Created', this.a);
  },
  beforeMount() {
    console.log('[Enfant] Before Mount', this.a)
  },
  mounted() {
    console.log('[Enfant] Mounted');

  },
  beforeUpdate() {
    console.log('[Enfant] Before Update : ', this.a);
    if(!this.a) {
      this.a = 'Nope';
    }
  },
  updated() {
    console.log('[Enfant] Updated', this.a);
  },
  beforeUnmount() {
    console.log("[Enfant] Before unmount");
    console.log(this.$toto)
  },
  unmounted() {
    console.log("[Enfant] unmounted")
  }
}
</script>

<style scoped>

</style>