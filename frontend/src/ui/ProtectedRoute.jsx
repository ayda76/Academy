import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import useUser from "../hooks/auth/useUser";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { user, isLoadingUser, isPending } = useUser();
  console.log(user, isLoadingUser);
  useEffect(() => {
    if (isLoadingUser) return;
    if (!user?.id) {
      navigate("/auth", { replace: true });
      return;
    }
    if (!user?.firstname) {
      navigate("/auth/complete-profile", { replace: true });
      return;
    }
  }, [isLoadingUser, user]);
  if (isLoadingUser) return <Loading />;
  return !isLoadingUser && user?.firstname && children;
};

export default ProtectedRoute;
