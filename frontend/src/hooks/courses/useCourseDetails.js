import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCourseDetailsApi } from "../../services/courseServices";

export default function useCourseDetails() {
  const { id } = useParams();
  const { data: course, isLoading } = useQuery({
    queryKey: ["course-details", id],
    queryFn: () => getCourseDetailsApi(id),
    enabled: !!id,
    retry: false,
    throwOnError: (err) => console.log(err),
  });
  return { course, isLoading };
}
