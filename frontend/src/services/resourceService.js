import api from "./api";

export async function createResourceApi(formData) {
  return api
    .post("/api/course/resource/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    })
    .then((res) => res?.data);
}

export async function deleteResourceApi(id) {
  return api.delete(`/api/course/resource/${id}`).then((res) => res?.data);
}
