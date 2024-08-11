import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000",
});

export default axiosInstance;
