import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeProfileApi } from "../../services/authServices";
import toast from "react-hot-toast";

export default function useCompleteProfile() {
  const querClient = useQueryClient();
  const { mutate: completeUser, isPending: isCreating } = useMutation({
    mutationFn: completeProfileApi,
    onSuccess: () => {
      querClient.invalidateQueries({
        queryKey: ["user-me"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.detail || "مشکلی رخ داده است.");
      console.log(err);
    },
  });
  return { completeUser, isCreating };
}
