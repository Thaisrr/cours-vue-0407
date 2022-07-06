<template>
  <form>
    <SuperControl v-for="control in form.controls" :control="control" :key="control.label" />
    <button type="submit">{{ form.action }}</button>
  </form>
</template>

<script>
import {Form} from "@/models/Form";
import SuperControl from "@/components/SuperControl";

export default {
  name: "SuperForm",
  components: {SuperControl},
  props: {
    form: {
      type: Form,
      required: true
    }
  }
}
</script>

<style scoped>

</style>