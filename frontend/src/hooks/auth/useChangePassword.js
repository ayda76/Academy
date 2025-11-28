import { useMutation } from "@tanstack/react-query";
import { changePasswordApi } from "../../services/authServices";
import toast from "react-hot-toast";

export default function useChangePassword() {
  const { mutate: changePasswordFn, isPending: isChanging } = useMutation({
    mutationFn: changePasswordApi,
    onSuccess: () => toast.success("کلمه عبور باموفقیت تغغیر کرد."),
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.detail || "مشکلی رخ داده است.");
    },
  });

  return { changePasswordFn, isChanging };
}
