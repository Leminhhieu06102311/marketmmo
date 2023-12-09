import axios from "axios";
import api from "./api";

export async function ratingProduct(access_token: string, ratingToSend: number, _id: string) {
    const res = await axios.post(`https://ultimate-implicitly-hound.ngrok-free.app/rating`,
      {
        "star": ratingToSend,
        "productId": _id
      },{
        headers: {
          Authorization: "Bearer " + access_token,
        },
      })
    return res.data
}