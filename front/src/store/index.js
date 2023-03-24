import { reactive } from 'vue'

export const store = reactive({
    isLogged: false,
    login() {
        this.isLogged = true
    },
    logout() {
        this.isLogged = false
    }
})