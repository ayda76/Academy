import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "../../services/authServices";
import toast from "react-hot-toast";

export default function useSignUp() {
  const { mutate: createUserFn, isPending: isCreatingUser } = useMutation({
    mutationFn: signUpApi,
    // onSuccess: (data) => {
    //   console.log(data);
    // },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "مشکلی رخ داده است.");
      console.log(err);
    },
  });
  return { createUserFn, isCreatingUser };
}
