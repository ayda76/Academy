import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCommentApi } from "../../services/commentService";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function useEditComment() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { mutate: editCommentFn, isPending: isEdting } = useMutation({
    mutationFn: editCommentApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["course-comment", id],
      });
      toast.success("باموفقیت ویرایش شد.");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.detail || "مشکلی رخ داده است.");
    },
  });

  return { editCommentFn, isEdting };
}
