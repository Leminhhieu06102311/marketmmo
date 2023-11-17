import api from "./api";

export async function registerUser(star : number, productId  : string) {
    const res = await api.post(`/rating?star=${star}&productId=${productId}`, {
        star,
        productId,
    })
    return res.data
}