import { useMutation } from "@tanstack/react-query";
import { deleteResourceApi } from "../../services/resourceService";
import toast from "react-hot-toast";

export default function useDeleteFile() {
  const { mutate: deleteFileFn, isPending: isDeleting } = useMutation({
    mutationFn: deleteResourceApi,
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.detail || "مشکلی رخ داده است.");
    },
  });

  return { deleteFileFn, isDeleting };
}
