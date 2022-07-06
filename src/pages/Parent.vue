<template>
  <h1>Communication entre les composants</h1>

  <h2>Imbrication de composants</h2>


  <p>Parent : price : {{price}}</p>
  <button @click="price++">Change price</button>
  <button @click="methodBidon">Bidon</button>
  <hr>
<!--
  <MyEnfant title="Enfant 1" :price="-20"/>
  <MyEnfant :title="titre" :price="100"/>
  <MyEnfant price="Vingt"/>
  -->
  <MyEnfant @add-promo="changePrice" title="Dynamic price 1" :price="price"/>
  <MyEnfant @add-promo="changePrice" title="Dynamic price 2" :price="price"/>

  <button @click="this.price++">Change price</button>


  <h2>Les slots :</h2>

  <SuperButton @click="this.price++" class="parent-classe">Ne cliquez pas ici !</SuperButton>
  <SuperButton @click="this.price++" class="parent-classe"/>


  <SuperModal>
    <template v-slot:title>Titre de la Modale {{price}}</template>
    <template v-slot:main>
      <h3>Sous titre</h3>
      <p>Un super paragraphe</p>
    </template>
    <template v-slot:button>
      <SuperButton @click="this.price++">Encore une Bouton</SuperButton>
      <SuperButton @click="this.price++">{{price}}</SuperButton>
    </template>
  </SuperModal>

</template>

<script>
import MyEnfant from "@/components/Enfant";
import SuperButton from "@/components/SuperButton";
import SuperModal from "@/components/Modal";
export default {
  name: "MyParent",
  components: {SuperModal, SuperButton, MyEnfant},
  data() {
    return {
      titre: 'Un super titre',
      price: 10
    }
  },
  methods: {
    changePrice(new_value, e) {
      console.log('[Parent] - demande de changement de prix reçue')
      this.price = new_value;
      e.target.style.backgroundColor = 'red'
    },
    methodBidon(e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>