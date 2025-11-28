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
  return api.get("/api/profile/ME/").then((res) => res?.data);
}

export async function completeProfileApi({ id, formData }) {
  return api
    .patch(`/api/profile/profile/${id}/`, formData)
    .then((res) => res?.data);
}

export async function changePasswordApi(formData) {
  return api
    .post("/api/profile/change/password/", formData)
    .then((res) => res?.data);
}
