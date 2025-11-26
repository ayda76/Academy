import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCourseCommentApi } from "../../services/commentService";

export default function useGetCourseComment() {
  const { id } = useParams();
  const { data: comments, isLoading: isLoadingCm } = useQuery({
    queryKey: ["course-comment", id],
    queryFn: () => getCourseCommentApi(id),
    enabled: !!id,
    retry: false,
  });
  return { comments, isLoadingCm };
}
