<template>
  <form @submit.prevent="submit">
    <p v-show="hasError">Error in form</p>
    <SuperControl v-for="(control, key) in form.controls" :control="control" :property_name="key" :key="key" @update="update" />
    <button type="submit">{{ form.action }}</button>
  </form>
</template>

<script>
import {Form} from "@/models/Form";
import SuperControl from "@/components/SuperControl";

export default {
  name: "SuperForm",
  components: {SuperControl},
  data: () => ({
    obj : {}
  }),
  props: {
    form: {
      type: Form,
      required: true
    }
  },
  methods: {
    update(prop, value) {
      this.obj[prop] = value;
      console.log(this.obj)
    },
    submit() {
      this.$emit('submit-form', this.obj)
    }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>