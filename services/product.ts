import api from "./api";

export async function getSellingProduct() {
    const res = await api.get('/product')
    const { result } = res.data
    return result
}