<template>
    <SuperForm @submit-form="submit" :form="fb"/>
</template>

<script>
import {Form} from "@/utils/models/Form";
import {Control} from "@/utils/models/Control";
import SuperForm from "@/components/SuperForm";
import Validator from "@/utils/models/Validator";

export default {
  name: "FormBuilder",
  components: {SuperForm},
  data() {
   return {
     fb: new Form('Mon Super Form', 'Yeah', {
       title: Control.createControl('Titre', 'text').validation(Validator.required, 'Veuillez entrer un titre'),
       author: new Control('Auteur.trice', 'text').validation(Validator.minLength, "ce nom est trop court", 2  ),
       grade: new Control('Note', 'number').validation(Validator.min, "Trop bas", 0).validation(Validator.max, "Trop haut", 5)
     })
   }
  },
  methods: {
    submit(book) {
      console.log('submitted', book)
    }
  }
}
</script>

<style scoped>

</style>