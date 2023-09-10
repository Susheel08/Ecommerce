import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  // baseURL: "https://api-eduvila.onrender.com/",
});
