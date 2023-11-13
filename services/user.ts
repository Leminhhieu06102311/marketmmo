import api from "./api";

export async function getUser(access_token : string) {
    const res = await api.get('/auth/me', {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    })
    return res.data
}