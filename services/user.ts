import api from "./api";

export async function getUser(access_token : string) {
    const res = await api.get('/auth/me', {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    })
    return res.data
}
export async function loginUser(email : string, password : string) {
    const res = await api.post('/auth/login', {
        email: email,
        password: password
    })
    return res.data
}
export async function registerUser(name: string, email : string, password : string) {
    const res = await api.post('/auth/register', {
        email,
        password,
        name
    })
    return res.data
}