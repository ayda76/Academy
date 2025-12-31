import { useQuery } from "@tanstack/react-query";
import { popularCourseApi } from "../../services/courseServices";

export default function usePopluarCourse() {
  const { data, isLoading } = useQuery({
    queryKey: ["popular"],
    queryFn: popularCourseApi,
    retry: false,
  });
  return { data, isLoading };
}
