import { useQuery } from "@tanstack/react-query";
import { getOrgByIdApi } from "../../services/organizationServices";

export default function useGetOrgById(id) {
  const { data, isLoading } = useQuery({
    queryKey: ["org", id],
    queryFn: () => getOrgByIdApi(id),
    enabled: !!id,
  });

  return { data, isLoading };
}
