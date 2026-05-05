import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourseApi } from "../../services/courseServices";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export default function useDeleteCourse() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const { mutate: deleteFn, isPending } = useMutation({
    mutationFn: deleteCourseApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
      toast.error("باموفقیت حذف شد.");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.detail || "مشکلی زخ داده است.");
    },
  });

  return { deleteFn, isPending };
}
