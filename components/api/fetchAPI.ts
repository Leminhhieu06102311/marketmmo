
import fetch from 'isomorphic-unfetch';

const fetchData = async () => {
  const response = await fetch('http://localhost:3001/users'); // Thay thế URL bằng URL của JSON Server và tài nguyên dữ liệu của bạn
  const data = await response.json();
  return data;
};