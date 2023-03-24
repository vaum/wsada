<template>
  <v-navigation-drawer floating permanent>
    <h1 class="text-h6 pa-6 text-light-blue-lighten-2 font-weight-bold">Views</h1>
    <v-list>
      <v-list-item link>
        <v-list-item-action>
          <router-link to="/" class="text-decoration-none text-blue-lighten-1 text-overline">Go to Home</router-link>
        </v-list-item-action>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <router-link to="/login" class="text-decoration-none text-blue-lighten-1 text-overline">Go to Sign In</router-link>
        </v-list-item-action>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <router-link to="/sign-up" class="text-decoration-none text-blue-lighten-1 text-overline">Go to Sign Up</router-link>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

</style>