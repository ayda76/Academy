import api from "./api";

export async function signUpApi(formData) {
  return api.post("/api/profile/SignUp/", formData).then((res) => res?.data);
}

export async function createJWTApi(formData) {
  return api.post("/auth/jwt/create/", formData).then((res) => res?.data);
}

export async function refreshApi(formData) {
  return api.post("/auth/jwt/refresh/", formData).then((res) => res?.data);
}

export async function userMeApi() {
  return api.get("/auth/users/me/").then((res) => res?.data);
}
