import axios, { AxiosError, AxiosInstance } from "axios";
import { Storage } from "../storage/index";

const baseUrl = `http://severurl~~`;

export const Instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

Instance.interceptors.request.use(
  (config) => {
    const accessToken = Storage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
