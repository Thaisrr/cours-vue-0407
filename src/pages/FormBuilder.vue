<template>
    <SuperForm :form="fb"/>
</template>

<script>
import {Form} from "@/models/Form";
import {Control} from "@/models/Control";
import SuperForm from "@/components/SuperForm";
import Validator from "@/models/Validator";

export default {
  name: "FormBuilder",
  components: {SuperForm},
  data() {
   return {
     fb: new Form('Mon Super Form', 'Yeah', [
       Control.createControl('Titre', 'text')
           .validation(Validator.required, 'Veuillez entrer un titre'),
       new Control('Auteur.trice', 'text'),
       new Control('Note', 'number'),
     ])
   }
  }
}
</script>

<style scoped>

</style>