import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCommentApi } from "../../services/commentService";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function useCreateComment() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { mutate: cretaeCommentFn, isPending: isCreating } = useMutation({
    mutationFn: createCommentApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["course-comment", id],
      });
      toast.success("دیدگاه شما ثبت شد.");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.detail || "مشکلی رخ داده است.");
    },
  });

  return { cretaeCommentFn, isCreating };
}
