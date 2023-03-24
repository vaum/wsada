import axios from "axios";
import { store } from '@/store'


export async function createUser(data) {
    axios.post('/api/user/create', {user: data})
        .then(function (response) {
            console.log(response)
            return response.data
        })
        .catch(function (error) {
            console.log(error)
            return error
        })

}

export async function login(data) {
    axios({
        method: 'get',
        url: '/api/user/login',
        responseType: 'json'
    })
        .then(function (response) {
            if(response.status === 200) {
                store.login()
            }
        });
}
