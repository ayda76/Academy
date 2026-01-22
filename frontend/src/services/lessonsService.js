import api from "./api";

export async function getLessonApi() {
  return api.get("/api/course/lesson/").then((res) => res?.data);
}

export async function createLessonApi(formData) {
  return api
    .post(
      "/api/course/lesson/",
      formData,
      //   ,{
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //     Accept: "application/json",
      //   },
      // }
    )
    .then((res) => res?.data);
}

export async function deleteLessonApi(id) {
  return api.delete(`/api/course/lesson/${id}/`).then((res) => res?.data);
}

export async function getLessonByIdApi(id) {
  return api.get(`/api/course/lesson/${id}/`).then((res) => res?.data);
}
