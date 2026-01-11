import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourseApi } from "../../services/courseServices";
import toast from "react-hot-toast";

export default function useCreateCourse() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: creatCourseFn, isPending: isCreating } = useMutation({
    mutationFn: createCourseApi,
    onSuccess: () => {
      toast.success("دوره جدید باموفقیت ایجاد شد.");
      queryClient.invalidateQueries({
        queryKey: ["courses", { page: 1 }],
      });
      navigate("/admin/courses/list?page=1");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.detail || "مشکلی رخ داه است.");
    },
  });

  return { creatCourseFn, isCreating };
}
