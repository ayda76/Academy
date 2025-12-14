import { useQuery } from "@tanstack/react-query";
import { userMeApi } from "../../services/authServices";
import { getAccessToken } from "../../services/api";

export default function useUser() {
  // const appSignging = localStorage.getItem("_appSignging") === "true";
  const token = getAccessToken();
  const isLogin = !!token;

  const {
    data: user,
    isLoading: isLoadingUser,
    isPending,
    error,
  } = useQuery({
    queryKey: ["user-me"],
    queryFn: userMeApi,
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnMount: false,
    enabled: isLogin,
    // enabled: !!appSignging,
    // throwOnError: (err) => console.log(err),
  });
  if (error) {
    console.log(error);
  }
  return { user, isLoadingUser, isPending };
}
