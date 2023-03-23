<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <v-app>
      <v-navigation-drawer floating permanent>
        <h1 class="text-h6 pa-6 light-blue-lighten-2" style="color: #4FC3F7">Views</h1>
        <v-list>
          <v-list-item link>
              <v-list-item-action>
                <router-link to="/">Go to Home</router-link>
              </v-list-item-action>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <router-link to="/login">Go to Sign In</router-link>
            </v-list-item-action>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <router-link to="/sign-up">Go to Sign Up</router-link>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container
            class="fill-height"
            fluid
        >
          <v-row
              align="center"
              justify="start"
              class="pa-6"
          >
            <v-col>

              <RouterView/>

            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-footer
          color="indigo"
          app
      >
        <span class="white--text">&copy; {{ new Date().getFullYear() }} — <strong>Wise Stamp Anton Dmytrenko Test Assignment</strong></span>
      </v-footer>
    </v-app>
</template>

<style lang="scss">
 #app {
   width: 100%;
 }

</style>
