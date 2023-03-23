<template>
  <form @submit.prevent="submit">
    <v-text-field
        v-model="name.value.value"
        :counter="10"
        :error-messages="name.errorMessage.value"
        label="Full Name"
    ></v-text-field>

    <v-text-field
        v-model="title.value.value"
        :counter="10"
        :error-messages="title.errorMessage.value"
        label="Title"
    ></v-text-field>

    <v-text-field
        v-model="company.value.value"
        :counter="10"
        :error-messages="company.errorMessage.value"
        label="Company"
    ></v-text-field>

    <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
    ></v-text-field>

    <v-text-field
        v-model="phone.value.value"
        :counter="7"
        :error-messages="phone.errorMessage.value"
        label="Phone Number"
    ></v-text-field>

    <v-text-field
        v-model="address.value.value"
        :counter="10"
        :error-messages="address.errorMessage.value"
        label="Address"
    ></v-text-field>

    <v-text-field
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
        label="Password"
        type="input"
        hint="Enter your password to access this website"
    ></v-text-field>

    <v-btn
        class="me-6"
        type="submit"
    >
      submit
    </v-btn>

    <v-btn @click="handleReset">
      clear
    </v-btn>
  </form>
</template>

<script>
import { useField, useForm } from 'vee-validate'
import {createUser} from "@/services/UserService";

export default {
  name: "SignUpForm",
  setup () {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name (value) {
          if (value?.length >= 2) return true

          return 'Full name needs to be at least 2 characters.'
        },
        title (value) {
          if (value?.length >= 2) return true

          return 'Title needs to be at least 2 characters.'
        },
        company (value) {
          if (value?.length >= 2) return true

          return 'Company needs to be at least 2 characters.'
        },
        email (value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

          return 'Must be a valid e-mail.'
        },
        phone (value) {
          if (value?.length > 9 && /[0-9-]+/.test(value)) return true

          return 'Phone number needs to be at least 9 digits.'
        },
        address (value) {
          if (value?.length >= 2) return true

          return 'Address needs to be at least 2 characters.'
        },
        password (value) {
          if (value?.length >= 5) return true

          return 'Password needs to be at least 5 characters.'
        },
      },
    })
    const name = useField('name')
    const title = useField('title')
    const company = useField('company')
    const phone = useField('phone')
    const email = useField('email')
    const address = useField('address')
    const password = useField('password')


    const submit = handleSubmit(values => {
      createUser(JSON.stringify(values, null, 2))
    })

    return {  name, title, company, phone, email, address, password, submit, handleReset }
  },
}
</script>