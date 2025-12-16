import api from "./api";

export async function submitRatingApi(formData) {
  return api.post("/api/course/rating/", formData).then((res) => res?.data);
}
