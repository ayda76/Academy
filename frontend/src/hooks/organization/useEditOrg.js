import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editOrgApi } from "../../services/organizationServices";
import toast from "react-hot-toast";

export default function useEditOrg() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: editOrgFn, isPending: isEditing } = useMutation({
    mutationFn: editOrgApi,
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

  return { editOrgFn, isEditing };
}
