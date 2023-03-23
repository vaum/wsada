<template>
  <h1 class="text-h4 pa-2 light-blue-lighten-2 v-clr">
    Main Dashboard
  </h1>
  <v-container class="pa-0">
    <EmailTemplateList></EmailTemplateList>
  </v-container>
  <v-btn color="primary ma-2" @click="fetchUsers">test connection</v-btn>
</template>

<script>
import SignInForm from "@/components/SignInForm.vue";
import SignUpForm from "@/components/SignUpForm.vue";
import {getAllUsers} from "@/services/UserService";
import EmailTemplateList from "@/components/EmailTemplateList.vue";

export default {
  name: "MainView.vue",
  components: {EmailTemplateList, SignUpForm, SignInForm},
  data() {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    fetchUsers(event) {
      getAllUsers().then(response => {
        console.log(response)
        this.users = response
        this.numberOfUsers = this.users.length
      })
    }
  }
}
</script>

<style scoped>
</style>