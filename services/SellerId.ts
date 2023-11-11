import api from "./api";

export async function getDetailSeller(userId: any) {
    const res = await api.get(`/user/seller/${userId}`)
    const data = res.data.data
    return data
}