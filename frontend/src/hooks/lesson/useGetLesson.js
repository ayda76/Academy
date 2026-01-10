import { useQuery } from "@tanstack/react-query";
import { getLessonApi } from "../../services/lessonsService";

export default function useGetLesson() {
  const {
    data: lessons,
    isLoading: isLoadingLessons,
    isFetching,
  } = useQuery({
    queryKey: ["lessons"],
    queryFn: getLessonApi,
    retry: false,
  });

  return { lessons, isLoadingLessons, isFetching };
}
