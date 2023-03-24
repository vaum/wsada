import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import { store }   from './store'
import App from './App.vue'
import 'vuetify/styles'
import './assets/main.css'
import axios from "axios"

const baseURL = 'http://localhost:3080';
if (typeof baseURL !== 'undefined') {
    axios.defaults.baseURL = baseURL;
}

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark'
    }
})

const app = createApp(App)


app.use(vuetify).use(router)

app.mount('#app')
