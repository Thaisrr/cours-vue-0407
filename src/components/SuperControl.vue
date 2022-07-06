<template>
  <div v-if="control">
    <label :for="control.label">{{control.label}}</label>

    <input v-model="input_value" :id="control.label" :type="control.type" @input="checkErrors" @change="checkErrors" @blur="checkErrors"/>

    <template v-for="err in errors" :key="err.name">
      <p v-if="control.hasError(err.validation)">{{err.error_text}}</p>
    </template>
  </div>
</template>

<script>
import {Control} from "@/models/Control";
import Validate from "@/models/Validate";

export default {
  name: "SuperControl",
  data() {
    return {
      input_value: undefined,
      dirty: false
    }
  },
  props: {
    control : Control,
    property_name: String
  },
  methods: {
    checkErrors() {
      setTimeout(() => {
        this.dirty = true;
        for( let validator of this.control.validations) {
          console.log('check');
          const validate = Validate[validator.validation];
          const isValid = validate(this.input_value, validator.value);
          console.log(validator.validation, isValid)
          if(!isValid) this.control.addError(validator.validation);
          else this.control.removeError(validator.validation)
          this.$emit('update', this.property_name, this.input_value)
        }
      }, (this.dirty)? 0 : 1000)
    }
  },
  computed: {
    errors() {
      return this.control.validations;
    },

  }
}
</script>

<style scoped>

</style>