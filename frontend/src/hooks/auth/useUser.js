import { useQuery } from "@tanstack/react-query";
import { userMeApi } from "../../services/authServices";

export default function useUser() {
  const appSignging = localStorage.getItem("_appSignging") || false;
  const {
    data: user,
    isLoading: isLoadingUser,
    isPending,
  } = useQuery({
    queryKey: ["user-me"],
    queryFn: userMeApi,
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnMount:false,
    enabled: !!appSignging,
    throwOnError:(err)=>console.log(err)
  });
  return { user, isLoadingUser, isPending };
}
