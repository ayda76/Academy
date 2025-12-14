import { useMutation, useQueryClient } from "@tanstack/react-query";
import { enrollApi } from "../../services/courseServices";
import toast from "react-hot-toast";

export default function useEnroll() {
  const queryClient = useQueryClient();

  const { mutate: enrollCourseFn, isPending } = useMutation({
    mutationFn: enrollApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-me"],
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.detail || "مشکلی رخ داده است.");
    },
  });

  return { enrollCourseFn, isPending };
}
