import { useQuery } from "@tanstack/react-query";
import { courseMeAPi } from "../../services/courseServices";
import { getAccessToken } from "../../services/api";

export default function useCourseMe() {
  const { data: myCourse, isLoading: isLoadingCourse } = useQuery({
    queryKey: ["course-me"],
    queryFn: courseMeAPi,
    retry: false,
    throwOnError: (err) => console.log(err),
  });

  return { myCourse, isLoadingCourse };
}
