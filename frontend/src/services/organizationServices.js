import api from "./api";

export async function getOrganizationApi() {
  return api.get("/api/course/organization/").then((res) => res?.data);
}

export async function createOrgApi(formData) {
  return api
    .post("/api/course/organization/", formData)
    .then((res) => res?.data);
}

export async function getOrgByIdApi(id) {
  return api.get(`/api/course/organization/${id}/`).then((res) => res?.data);
}

export async function editOrgApi({ id, formData }) {
  return api
    .patch(`/api/course/organization/${id}/`, formData)
    .then((res) => res?.data);
}

export async function deleteOrgApi(id) {
  return api.delete(`/api/course/organization/${id}/`).then((res) => res?.data);
}
