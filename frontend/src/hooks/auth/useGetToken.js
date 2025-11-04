import { useMutation } from "@tanstack/react-query";
import { refreshApi} from "../../services/authServices";
import toast from "react-hot-toast";

export default function useGetToken() {
  const { mutate: getTokenFn, isPending: isCreatingToken } = useMutation({
    mutationFn: refreshApi,
    onError: (err) =>
      toast.error(err?.response?.data?.message || "مشکلی رخ داده است."),
  });
  return { getTokenFn, isCreatingToken };
}
