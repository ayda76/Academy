import { useQuery } from "@tanstack/react-query";
import { getCoursesApi } from "../../services/courseServices";

export default function useGetCourses(params) {
  const { data: coursesList, isLoading: isLoadingCourses } = useQuery({
    queryKey: ["courses", params],
    queryFn: () => getCoursesApi(params),
    retry: false,
  });
  return { coursesList, isLoadingCourses };
}
