import { useNavigate } from "react-router";
import useUser from "../../hooks/auth/useUser";
import DashboardPanelLayout from "../../layout/DashboardPanelLayout";
import { useEffect } from "react";
import Loading from "../../ui/Loading";

const DashboardPage = () => {
  const navigate = useNavigate();
  const appSignging = localStorage.getItem("_appSignging") || false;
  const { user, isLoadingUser, isPending } = useUser();
  console.log(user, isLoadingUser);
  useEffect(() => {
    if (isPending) return;
    if (!appSignging) {
      navigate("/auth", { replace: true });
      return;
    }
    if (!user?.firstname) {
      navigate("/auth/complete-profile", { replace: true });
      return;
    }
  }, [isPending, appSignging, user]);
  if (isPending) return <Loading />;

  return (
    !isPending && appSignging && <DashboardPanelLayout></DashboardPanelLayout>
  );
};

export default DashboardPage;
