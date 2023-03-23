<template>
  <h1 class="text-h2 pa-6 light-blue-lighten-2 v-clr">Login</h1>
  <v-spacer class="pa-6"></v-spacer>
  <SignInForm />
</template>

<script>
import SignInForm from "@/components/SignInForm.vue";

export default {
  name: "SignInView",
  components: {SignInForm}
}
</script>

<style scoped>

</style>