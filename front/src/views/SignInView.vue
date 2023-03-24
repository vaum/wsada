<template>
  <h1 class="text-h2 pa-6 text-light-blue-lighten-2">Login</h1>
  <v-spacer class="pa-6"></v-spacer>
  <SignInForm />
</template>

<script>
import { store }  from '@/store'
import SignInForm from "@/components/SignInForm.vue"


export default {
  name: "SignInView",
  components: {SignInForm},
  data() {
    return {
      store
    }
  }
}
</script>
