import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ultimate-implicitly-hound.ngrok-free.app/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'accept': '*/*',
    // 'Access-Control-Allow-Origin': "*",
    // 'content-type': 'application/x-www-form-urlencoded',
    // 'Access-Control-Allow-Credentials': 'true',
    'ngrok-skip-browser-warning': 'true'
  },
});

export default api;