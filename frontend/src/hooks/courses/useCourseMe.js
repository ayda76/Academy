import { useQuery } from "@tanstack/react-query";
import { courseMeAPi } from "../../services/courseServices";
import { getAccessToken } from "../../services/api";

export default function useCourseMe() {
  // const appSignging = localStorage.getItem("_appSignging") || false;
  const token = getAccessToken();
  const { data: myCourse, isLoading: isLoadingCourse } = useQuery({
    queryKey: ["course-me"],
    queryFn: courseMeAPi,
    staleTime: 5 * 60 * 1000,
    refetchOnMount: false,
    enabled: !!token,
    retry: false,
    throwOnError: (err) => console.log(err),
  });

  return { myCourse, isLoadingCourse };
}
