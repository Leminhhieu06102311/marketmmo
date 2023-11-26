import api from "./api";

export async function getSellingProduct() {
    const res = await api.get('/product?limit=12&page=1&sort=BEST_SELLER')
    const { result } = res.data.data
    return result
}
export async function getAllProducts() {
    const res = await api.get('/product?limit=30&page=1&sort=CREATED_DATE')
    const { result } = res.data.data
    return result
}

export async function getDetailProduct(productId: string) {
    const res = await api.get(`/product/detail?slug=${productId}`)
    const data = res.data.data
    return data
    
}
export async function getProducts() {
    const res = await api.get(`/product?limit=100&page=1&sort=BEST_SELLER`)
    const data = res.data.data.result
    return data
    
}
export async function getAccountTrending() {
    const res = await api.get('/product?limit=6&page=1&categoryId=6544c5879d85a36c1ddbc646&sort=BEST_SELLER_DESC')
    const { result } = res.data.data
    return result
}
export async function getSoftwareTrending() {
    const res = await api.get('/product?limit=6&page=1&categoryId=6544c5879d85a36c1ddbc645&sort=BEST_SELLER_DESC')
    const { result } = res.data.data
    return result
}
export async function   getProductFromCategory(categoryId : string) {
    const res = await api.get(`/product?limit=15&page=1&categoryId=${categoryId}&sort=RATING_DESC`)
    const { result } = res.data.data
    return result
}
