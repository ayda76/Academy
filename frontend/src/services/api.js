import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    let accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    console.log(accessToken);
    return config;
  },
  (err) => Promise.reject(err),
);

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalConfig = error.config;
    if (error.response?.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      const refresh = Cookies.get("refresh");

      if (!refresh) {
        Cookies.remove("refresh");
        localStorage.removeItem("_appSignging");
        localStorage.removeItem("token");
        // accessToken = null;
        return Promise.reject(error);
      }
      console.log(refresh);
      try {
        const refreshResponse = await api.post(
          `${BASE_URL}/auth/jwt/refresh/`,
          { refresh: refresh },
        );
        // accessToken = refreshResponse.data.access;
        localStorage.setItem("_appSignging", true);
        localStorage.setItem("token", refreshResponse?.data?.access);

        error.config.headers["Authorization"] = refreshResponse?.data?.access;
        return api(error.config);
      } catch (err) {
        console.log(err);
        Cookies.remove("refresh");
        localStorage.removeItem("_appSignging");
        localStorage.removeItem("token");
        // accessToken = null;
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

// export function setAccessToken(token) {
//   console.log(token);
//   accessToken = token;
// }

export function getAccessToken() {
  // return accessToken;
  return localStorage.getItem("token");
}

export default api;
