<template>
  <form @submit.prevent="submit">
    <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
    ></v-text-field>

    <v-text-field
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
        label="Password"
    ></v-text-field>

    <v-btn
        class="me-6"
        type="submit"
    >
      submit
    </v-btn>
  </form>
</template>

<script>
import { useField, useForm } from 'vee-validate'

export default {
  name: "SignInForm",
  setup() {
    const {handleSubmit} = useForm({
      validationSchema: {
        email(value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

          return 'Must be a valid e-mail.'
        },
        password(value) {
          if (value?.length >= 5) return true

          return 'Password needs to be at least 5 characters.'
        },
      },
    })

    const email = useField('email')
    const password = useField('password')


    const submit = handleSubmit(values => {
      alert(JSON.stringify(values, null, 2))
    })

    return {email, password, submit}
  }
}
</script>

<style scoped>

</style>