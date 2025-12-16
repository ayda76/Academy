import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitRatingApi } from "../../services/RatingService";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function useSubmitRating() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { mutate: submitRatingFn, isPending: isSubmiting } = useMutation({
    mutationFn: submitRatingApi,
    onSuccess: () => {
      toast.success("امتیاز شما باموفقیت ثبت شد.");
      queryClient.invalidateQueries({
        queryKey: ["course-details", id],
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.detail || "مشکلی رخ داده است.");
    },
  });

  return { submitRatingFn, isSubmiting };
}
