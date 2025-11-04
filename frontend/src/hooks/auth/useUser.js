import { useQuery } from "@tanstack/react-query";
import { userMeApi } from "../../services/authServices";

export default function useUser() {
  const appSignging = localStorage.getItem("_appSignging") || false;
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ["user-me"],
    queryFn: userMeApi,
    retry: false,
    enabled: !!appSignging,
  });
  return { user, isLoadingUser };
}
