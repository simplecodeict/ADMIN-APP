// axiosInstance.js

import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://pos-api-g6qg.onrender.com",
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const payload = JSON.parse(token);
    const accessToken = payload?.accessToken;
    if (token) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosInstance;
