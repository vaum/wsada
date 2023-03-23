import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createAuth0 } from '@auth0/auth0-vue';
import router from './router'
import App from './App.vue'
import 'vuetify/styles'
import './assets/main.css'
import axios from "axios";

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

app.use(
    createAuth0({
        domain: 'dev-7kijuivli2rb1wji.us.auth0.com',
        client_id: 'eNOniHDTWdt2O9M1ZegnZoJzvIGyK0hj',
        redirect_uri: window.location.origin,
    }),
);

app.use(vuetify).use(router)

app.mount('#app')
