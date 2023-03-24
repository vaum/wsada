<template>
  <h1 class="text-h4 pa-2 text-light-blue-lighten-2">
    Main View
  </h1>
  <v-container class="pa-0">
    <EmailTemplateList></EmailTemplateList>
  </v-container>
  <v-btn v-if="store.logged" color="primary ma-2" @click="store.logout()">Logout</v-btn>
  <v-btn v-else color="primary ma-2" @click="store.login()">Login</v-btn>
</template>

<script>
import { store }  from '@/store'
import SignInForm from "@/components/SignInForm.vue";
import SignUpForm from "@/components/SignUpForm.vue";
import EmailTemplateList from "@/components/EmailTemplateList.vue";

export default {
  name: "MainView.vue",
  components: {EmailTemplateList, SignUpForm, SignInForm},
  data() {
    return {
      store
    }
  },
}
</script>

<style scoped>
</style>