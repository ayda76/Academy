import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCommentApi } from "../../services/commentService";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function useDeleteComment(params) {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { mutate: deleteCommentFn, isPending: isDeleting } = useMutation({
    mutationFn: deleteCommentApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["course-comment", id],
      });
      toast.success("دیدگاه شما حذف شد.");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.detail || "مشکلی رخ داده است.");
    },
  });

  return { deleteCommentFn, isDeleting };
}
