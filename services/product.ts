import api from "./api";

export async function getSellingProduct() {
    const res = await api.get('/product')
    const { result } = res.data
    return result
}
export async function getDetailProduct(productId: string) {
    const res = await api.get(`/product?_id=${productId}`)
    const data = res.data
    return data
    
}