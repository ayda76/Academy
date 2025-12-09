import { useQuery } from "@tanstack/react-query";
import { getOrganizationApi } from "../../services/organizationServices";

export default function useGetOrganization() {
  const { data: organization, isLoading: isLoadingOrg } = useQuery({
    queryKey: ["get-organization"],
    queryFn: getOrganizationApi,
    throwOnError: (err) => console.log(err),
    retry: false,
  });
  return { organization, isLoadingOrg };
}
