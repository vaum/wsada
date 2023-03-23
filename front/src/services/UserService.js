import axios from "axios";

export async function getAllUsers() {
    const response = await axios.get('/api/users', {headers: { "Content-Type": "application/json" },});
    return response.data;
}

export async function createUser(data) {
    console.log({user: data})
    //const response = await axios.post(`/api/user`, {user: data});

    axios.post('/api/user/create', {user: data})
        .then(function (response) {
            console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}