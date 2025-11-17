import api from "./api";

export async function getCoursesApi(params) {
    console.log("p",params);
  return api.get("/api/course/course/", { params }).then((res) => res?.data);
}
