<template>
  <v-card class="pa-4 ma-2 bg-grey-darken-4">
    <defaultTemplate v-bind:userEmailData="userEmailData"></defaultTemplate>
  </v-card>

  <v-card class="pa-4 ma-2 bg-grey-darken-4">
    <modernTemplate v-bind:userEmailData="userEmailData"></modernTemplate>
  </v-card>
</template>

<script>
import DefaultTemplate from "../../emailTemplates/DefaultTemplate.vue";
import ModernTemplate from "../../emailTemplates/ModernTemplate.vue";
export default {
  name: "EmailTemplateList",
  components: {ModernTemplate, DefaultTemplate},
  data() {
    return {
      userEmailData : {
        name : "John Doe",
        title : "Dev",
        company : "Wise Stamps",
        email : "somemail@somedomen.com",
        phone : "1234567890",
        address : "4th Street, SomeCity, Country 1"
      }
    }
  }
}
</script>

<style scoped>

</style>