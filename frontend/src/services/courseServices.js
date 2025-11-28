import api from "./api";

export async function getCoursesApi(params) {
  return api.get("/api/course/course/", { params }).then((res) => res?.data);
}

export async function getCourseDetailsApi(id) {
  return api.get(`/api/course/course/${id}/`).then((res) => res?.data);
}

export async function courseMeAPi(id) {
  return api
    .get(`/api/profile/profile/${id}/CoursesMe/`)
    .then((res) => res?.data);
}
