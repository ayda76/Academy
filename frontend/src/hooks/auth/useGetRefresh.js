import { useMutation } from "@tanstack/react-query";
import { createJWTApi} from "../../services/authServices";
import toast from "react-hot-toast";

export default function useGetRefresh() {
  const { mutate: createRefreshFn, isPending: isCreatingRefresh } = useMutation({
    mutationFn: createJWTApi,
    onSuccess:(data)=>console.log(data),
    onError: (err) =>
      {
        toast.error(err?.response?.data?.detail || "مشکلی رخ داده است.")
        console.log(err);
      }
  });
  return { createRefreshFn, isCreatingRefresh };
}
