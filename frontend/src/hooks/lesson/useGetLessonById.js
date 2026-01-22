import { useQuery } from "@tanstack/react-query";
import { getLessonByIdApi } from "../../services/lessonsService";
import { useParams } from "react-router-dom";

export default function useGetLessonById() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryFn: () => getLessonByIdApi(id),
    queryKey: ["lessonById", id],
    enabled: !!id,
    retry: false,
  });
  return { data, isLoading };
}
