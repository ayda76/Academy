import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrgApi } from "../../services/organizationServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCreateOrg() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: createOrgFn, isPending: isCreating } = useMutation({
    mutationFn: createOrgApi,
    onSuccess: () => {
      toast.success("باموفقیت ایجاد شد.");
      queryClient.invalidateQueries({
        queryKey: ["get-organization"],
      });
      navigate("/admin/organization/list");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.detail || "مشکلی زخ داده است.");
    },
  });

  return { createOrgFn, isCreating };
}
