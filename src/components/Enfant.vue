<template>
    <h3>{{ title }}</h3>

  <div>
    <h3>Props saved as Data</h3>
    <p>Prix hors taxe : {{d_price}} €</p>
    <p>Prix ttc : {{d_price * 1.2}} €</p>

    <button @click="createPromo(0.5)">-50%</button>
    <button @click="createPromo(0.7)">-70%</button>
  </div>

  <div>
    <h3>Props</h3>
    <p>Prix hors taxe : {{price}} €</p>
    <p>Prix ttc : {{price * 1.2}} €</p>

    <button @click="(e) => createPromoProps(0.5, e)">-50%</button>
    <button @click="(e) => createPromoProps(0.7, e)">-70%</button>
  </div>


  <p v-if="obj">
    {{obj.value}}
  </p>

</template>

<script>
import {SuperObject} from "@/models/SuperObject";

export default {
  name: "MyEnfant",
  //props: ['title', 'price'],
  /*  Boolean | Array | Object | Function | Promise  */
 /* props: {
    title: String,
    price: Number,
    obj: Object
  },*/
  data() {
    return {
      d_price: this.price
    }
  },
  props: {
    title: {
      type: String,
      required: false,
      default: 'Pas de titre fourni'
    },
    price: {
      type: Number,
      default: 0,
      validator(val) {
        return val >= 0
      }
    },
    obj: {
      type: SuperObject,
      default: function () {
        return new SuperObject('No value')
      }
    }
  },
  methods: {
    increment() {
      console.log(this.title)
      //this.counter++;
    },
    createPromo(promo) {
      const new_val = this.d_price * promo;
      this.d_price = new_val;
      console.log(new_val)
    },
    createPromoProps(promo, e) {
      const new_val = this.d_price * promo;
      this.$emit('add-promo', new_val, e)
    }
  }
}
</script>

<style scoped>

</style>