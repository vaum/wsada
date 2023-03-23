<template>
  <h1 class="text-h2 pa-6 light-blue-lighten-2 v-clr">Sign Up</h1>
  <v-spacer class="pa-6"></v-spacer>
  <SignUpForm />
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";

export default {
  name: "SignUpView",
  components: {SignUpForm}
}
</script>

<style scoped>

</style>