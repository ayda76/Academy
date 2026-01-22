import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLessonApi } from "../../services/lessonsService";
import toast from "react-hot-toast";

export default function useDeleteLesson() {
  const queryClient = useQueryClient();

  const { mutate: DeleteLessonFn, isPending } = useMutation({
    mutationFn: deleteLessonApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["lessons"],
      });
      toast.error("باموفقیت حذف شد.");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.detail || "مشکلی زخ داده است.");
    },
  });
  return { DeleteLessonFn, isPending };
}
