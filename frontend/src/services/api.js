import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

let accessToken = null;
console.log(accessToken);
app.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = accessToken;
  }
  return config;
});

app.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      const refresh = Cookies.get("refresh_token");

      if (!refresh) {
        Cookies.remove("refresh_token");
        localStorage.removeItem("_appSignging");
        return Promise.reject(error);
      }

      try {
        const refreshResponse = await axios.post(
          "/auth/jwt/refresh/",
          { refresh: refresh }, // بدنت
        );

        accessToken = refreshResponse.data.access;

        // رفرش جدید رو در کوکی ذخیره کن
        Cookies.set("refresh_token", refreshResponse.data.refresh, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });
        localStorage.setItem("_appSignging", true);

        error.config.headers.Authorization = accessToken;
        return app(error.config);
      } catch (err) {
        Cookies.remove("refresh_token");
        localStorage.removeItem("_appSignging");
        accessToken = null;
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export function setAccessToken(token) {
  accessToken = token;
}

const api = {
  get: app.get,
  post: app.post,
  put: app.put,
  patch: app.patch,
  delete: app.delete,
};

export default api;
