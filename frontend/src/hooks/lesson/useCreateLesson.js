import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLessonApi } from "../../services/lessonsService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCreateLesson() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createLessonFn, isPending: isCreating } = useMutation({
    mutationFn: createLessonApi,
    onSuccess: () => {
      toast.success("درس جدید باموفقیت ایجاد شد.");
      queryClient.invalidateQueries({
        queryKey: ["lessons"],
      });
      navigate("/admin/lessons/list");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.detail || "مشکلی رخ داده است.");
    },
  });

  return { createLessonFn, isCreating };
}
