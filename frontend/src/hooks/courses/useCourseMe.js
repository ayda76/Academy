import { useQuery } from "@tanstack/react-query";
import { courseMeAPi } from "../../services/courseServices";

export default function useCourseMe(id) {
  const appSignging = localStorage.getItem("_appSignging") || false;
  const { data: myCourse, isLoading: isLoadingCourse } = useQuery({
    queryKey: ["course-me"],
    queryFn: () => courseMeAPi(id),
    staleTime: 5 * 60 * 1000,
    refetchOnMount: false,
    enabled: !!appSignging,
    retry: false,
    enabled: !!appSignging,
    throwOnError: (err) => console.log(err),
  });

  return { myCourse, isLoadingCourse };
}
