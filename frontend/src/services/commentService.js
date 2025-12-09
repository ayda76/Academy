import api from "./api";

export async function getCourseCommentApi(id) {
  return api
    .get(`/api/course/course/${id}/EachCourseComments/`)
    .then((res) => res?.data);
}

export async function createCommentApi(formData) {
  return api.post("/api/comment/comment/", formData).then((res) => res?.data);
}

export async function deleteCommentApi(id) {
  return api.delete(`/api/comment/comment/${id}/`).then((res) => res?.data);
}

export async function editCommentApi({ id, formData }) {
  return api
    .patch(`/api/comment/comment/${id}/`, formData)
    .then((res) => res?.data);
}
