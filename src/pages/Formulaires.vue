<template>
    <h1>Formulaires</h1>

  <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Nom</label>
        <input id="name" v-model="book.name" @input="this.name_dirty = true">
        <p v-show="nameError" class="error">Veuillez entrer un nom</p>
      </div>

    <div>
      <label for="author">Auteur.trice</label>
      <input id="author" v-model="book.author" @input="this.author_dirty = true">
      <p v-show="authorError" class="error">Veuillez entrer un auteur</p>
    </div>

    <button :disabled="nameError || authorError" type="submit">Save</button>

  </form>
</template>

<script>
export default {
name: "FormulairesComponent",
 data() {
  return {
    book: {name: '', author: ''},
    name_dirty: false,
    author_dirty: false
  }
 },
  methods: {
    handleSubmit() {
      if( !this.nameError && !this.authorError)
      console.log(this.book);
    }
  },
  computed: {
    nameError() {
      return this.name_dirty && !this.book.name;
    },
    authorError() {
      return this.author_dirty && !this.book.author;
    }
  }
}
</script>

<style scoped>

.error {
  color: red;
}
</style>