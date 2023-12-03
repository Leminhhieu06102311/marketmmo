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
    const res = await api.get('/product?limit=6&page=1&sort=BEST_SELLER_DESC')

    console.log(res)
    const { result } = res.data.data
    return result
}
export async function getSoftwareTrending() {
    const res = await api.get('/product?limit=6&page=1&sort=BEST_SELLER_DESC')
    const { result } = res.data.data
    return result
}
export async function  getProductFromCategory(categoryId : string, page : number) {
    console.log(categoryId)
    const res = await api.get(`/product?limit=18&page=${page}&categoryId=${categoryId}&sort=RATING_DESC`)
    const { result } = res.data.data
    return result
}
