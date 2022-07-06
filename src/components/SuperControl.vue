<template>
  <div v-if="control">
    <label :for="control.label">{{control.label}}</label>
    <input :id="control.label" :type="control.type" @input="this.dirty = true"/>
    <p v-if="hasRequiredError">{{ getRequiredError  }}</p>
  </div>
</template>

<script>
import {Control} from "@/models/Control";
import Validator from "@/models/Validator";

export default {
  name: "SuperControl",
  data() {
    return {
      value: undefined,
      dirty: false
    }
  },
  props: {
    control : {
      type: Control
    }
  },
  methods: {
    checkErrors() {
      /*for((validator )in this.control.validations) {
        validator
      }*/
    }
  },
  computed: {
    isRequired() {
      return this.control.validations.findIndex(val => val.validation === Validator.required);
    },
    hasRequiredError() {
      return this.dirty && this.isRequired && !this.value;
    },
    getRequiredError() {
      if(this.control ) {
        const index = this.control.validations.findIndex(val => val.validation === 'required');
        if(index >= 0) return this.control.validations[index].error;
      }

      return 'Nope'
    }
  }
}
</script>

<style scoped>

</style>