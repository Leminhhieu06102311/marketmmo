import api from "./api";

export async function getDetailSeller(userId: any) {
    const res = await api.get(`/user/seller/${userId}`)
    const data = res.data.data
    return data
}
export async function getAllProductsCreated() {
    const res = await api.get('/product?limit=30&page=1&sort=CREATED_DATE')
    const { result } = res.data.data
    return result
}
export async function getAllProductsCreatedDesc() {
    const res = await api.get('/product?limit=30&page=1&sort=CREATED_DATE_DESC')
    const { result } = res.data.data
    return result
}
export async function getAllProductsPrice() {
    const res = await api.get('/product?limit=30&page=1&sort=PRICE')
    const { result } = res.data.data
    return result
}
export async function getAllProductsPriceDesc() {
    const res = await api.get('/product?limit=30&page=1&sort=PRICE_DESC')
    const { result } = res.data.data
    return result
}
export async function getAllProductsRating() {
    const res = await api.get('/product?limit=30&page=1&sort=RATING')
    const { result } = res.data.data
    return result
}
export async function getAllProductsRatingDesc() {
    const res = await api.get('/product?limit=30&page=1&sort=RATING_DESC')
    const { result } = res.data.data
    return result
}
export async function getAllProductsBestSeller() {
    const res = await api.get('/product?limit=30&page=1&sort=BEST_SELLER')
    const { result } = res.data.data
    return result
}
export async function getAllProductsBestSellerDesc() {
    const res = await api.get('/product?limit=30&page=1&sort=BEST_SELLER_DESC')
    const { result } = res.data.data
    return result
}