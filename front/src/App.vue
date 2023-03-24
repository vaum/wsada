<script setup>
import { RouterView } from 'vue-router'
import Navigation from "@/components/Navigation.vue";
</script>

<template>
    <v-app>
      <Navigation/>

      <v-main>
        <v-container fluid class="fill-height">
          <v-row align="center" justify="start" class="pa-6">
            <v-col>

              <RouterView/>

            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-footer app class="bg-light-blue-lighten-2">
        <span class="white--text">&copy; {{ new Date().getFullYear() }} — <strong>Wise Stamp Anton Dmytrenko Test Assignment</strong></span>
      </v-footer>
    </v-app>
</template>

<style>
 #app {
   width: 100%;
 }
</style>
