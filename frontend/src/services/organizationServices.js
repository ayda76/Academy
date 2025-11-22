import api from "./api";

export async function getOrganizationApi() {
  return api.get("/api/course/organization/").then((res) => res?.data);
}
