import api from "./api";
import axios from 'axios';

export async function getHistory() {
  const res = await api.get('/order/histories?limit=30&page=1')
  const { result } = res.data.data
  return result
}


// Tạo instance của Axios với các cài đặt mặc định
const axiosInstance = axios.create({
  baseURL: '/order/histories?limit=30&page=1',
});

// Phương thức để gắn token vào headers
const setToken = (token:any) => {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// Hàm để thực hiện yêu cầu HTTP
const getAll = (token:any) => {
  setToken(token); // Gắn token vào headers

  return axiosInstance.get('todos/')
    .then(response => {
      // Xử lý dữ liệu trả về
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      // Xử lý lỗi
      console.error(error);
    });
};

export default getAll;