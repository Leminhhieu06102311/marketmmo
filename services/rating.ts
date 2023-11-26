import api from "./api";

export async function ratingProduct(access_token: string ,star : number, productId  : string) {
    const res = await api.post(`/rating?star=${star}&productId=${productId}`,
      {},{
        headers: {
          Authorization: "Bearer " + access_token,
        },
      })
    return res.data
}