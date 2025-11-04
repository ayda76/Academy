import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

let accessToken = null;
console.log(accessToken);
api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers["Authorization"] = accessToken;
  }
  // console.log(api.defaults);
  return config;
},(err) => Promise.reject(err),);

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalConfig = error.config;
    if (error.response?.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      const refresh = Cookies.get("refresh");
      console.log(refresh);
      if (!refresh) {
        Cookies.remove("refresh");
        localStorage.removeItem("_appSignging");
        accessToken=null;
        return Promise.reject(error);
      }

      try {
        const refreshResponse = await api.post(
          `${BASE_URL}/auth/jwt/refresh/`,
          { refresh: refresh },
        );
        accessToken = refreshResponse.data.access;
        localStorage.setItem("_appSignging", true);

        error.config.headers["Authorization"] = accessToken;
        return api(error.config);
      } catch (err) {
        console.log(err);
        Cookies.remove("refresh");
        localStorage.removeItem("_appSignging");
        accessToken = null;
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export function setAccessToken(token) {
  console.log("token", token);
  accessToken = token;
}


export default api;
