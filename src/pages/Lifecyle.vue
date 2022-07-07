<template>
  <h1 ref="title">Cycle de Vie</h1>

  <div>
    <input v-model="a"/>
    <p>A : {{a}}</p>
  </div>

  <LifeChild/>
</template>

<script>
import LifeChild from "@/components/LifeChild";
export default {
name: "LifecyleComponent",
  components: {LifeChild},
  data() {
    return {
      a: 'Hello World !'
    }
  },
  methods: {
    getApi() {
      // get data
      console.log('----- fetchind datas');
      let counter = 0;
      this.$toto = setInterval(() => {
        console.info('Count : ', counter);
        counter++;
      }, 1000)
    },
    createBug() {
      setTimeout( () => {
          console.warn('BUG ???', this.a)
      }, 0)
    }
  },
  beforeCreate : function () {
    console.log('[Parent]  Before create', this.a)
  },
  created() {
    console.log('[Parent] Created', this.a);
    this.getApi();

  },
  beforeMount() {
    console.log('[Parent] Before Mount', this.a)
  },
  mounted() {
    console.log('[Parent] Mounted');
    this.$refs.title.textContent = 'Bonjour - Mounted';
    this.createBug()
  },
  beforeUpdate() {
    console.log('[Parent] Before Update : ', this.a);
    if(!this.a) {
      this.a = 'Nope';
    }
  },
  updated() {
    console.log('[Parent] Updated', this.a);
  },
  beforeUnmount() {
    console.log("[Parent] Before unmount");

  },
  unmounted() {
    console.log("[Parent] unmounted");
    clearInterval(this.$toto)
  }

}
</script>

<style scoped>

</style>