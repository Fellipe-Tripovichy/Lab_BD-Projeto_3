import axios from 'axios';

const createAxiosInstance = (token) => {
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  });

  return instance;
};

export default createAxiosInstance;


