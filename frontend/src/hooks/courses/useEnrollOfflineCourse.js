import { useMutation, useQueryClient } from "@tanstack/react-query";
import { enrollOfflineCourseApi } from "../../services/courseServices";
import toast from "react-hot-toast";

export default function useEnrollOfflineCourse() {
  const queryClient = useQueryClient();

  const { mutate: enrollOfflineFn, isPending } = useMutation({
    mutationFn: enrollOfflineCourseApi,
    onSuccess: () => {
      toast.success("خرید شما باموفقیت انجام شد");
      queryClient?.invalidateQueries({
        queryKey: ["course-me"],
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.dateil || "مشکلی رخ داده است.");
    },
  });

  return { enrollOfflineFn, isPending };
}
