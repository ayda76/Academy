import { Navigate } from "react-router";
import useUser from "../../hooks/auth/useUser";
import DashboardPanelLayout from "../../layout/DashboardPanelLayout";

const DashboardPage = () => {
  const { user, isLoadingUser } = useUser();
  console.log(user);
  if (isLoadingUser) return <div>loading</div>;
  if (!isLoadingUser && !user?.id) return <Navigate to={"/auth"} />;
  if (!isLoadingUser && !user?.firstname)
    return <Navigate to={"/auth/complete-profile"} />;
  return <DashboardPanelLayout></DashboardPanelLayout>;
};

export default DashboardPage;
