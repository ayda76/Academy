import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createResourceApi } from "../../services/resourceService";

export default function useUploadFile() {
  const { mutate: uploadFileFn, isPending } = useMutation({
    mutationFn: createResourceApi,
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.detail || "مشکلی رخ داده است.");
    },
  });
  return { uploadFileFn, isPending };
}
