import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteOrgApi } from "../../services/organizationServices";

export default function useDeleteOrg() {
  const queryClient = useQueryClient();
  const { mutate: deleteOrgFn, isPending } = useMutation({
    mutationFn: deleteOrgApi,
    onSuccess: () => {
      toast.success("باموفقیت حذف شد.");
      queryClient.invalidateQueries({
        queryKey: ["get-organization"],
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.detail || "مشکلی زخ داده است.");
    },
  });

  return { deleteOrgFn, isPending };
}
