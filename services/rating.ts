import api from "./api";

export async function ratingProduct(access_token: string, ratingToSend: number, _id: string) {
    const res = await api.post(`/rating`,
      {
        star: ratingToSend,
        productId: _id
      },{
        headers: {
          Authorization: "Bearer " + access_token,
        },
      })
    return res.data
}