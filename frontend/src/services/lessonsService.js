import api from "./api";

export async function getLessonApi() {
  return api.get("/api/course/lesson/").then((res) => res?.data);
}

export async function createLessonApi(formData) {
  return api.post("/api/course/lesson/", formData).then((res) => res?.data);
}
