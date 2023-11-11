import api from "./api";
import axios from "axios";
export async function getHistoriesOrders() {
  try {
    const accessToken = localStorage.getItem("access_token");
    const response = await axios.get("/order/histories", {
      params: {
        limit: 30,
        page: 1,
        before: "",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // Xử lý phản hồi
    console.log(response.data);
  } catch (error) {
    // Xử lý lỗi
    console.error(error);
  }
}
