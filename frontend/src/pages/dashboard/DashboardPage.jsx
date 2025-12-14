import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/auth/useUser";
import DashboardPanelLayout from "../../layout/DashboardPanelLayout";
import { useEffect, useState } from "react";
import Loading from "../../ui/Loading";
import MainSideBar from "../../components/dashboard/sidebar/MainSideBar";
import ModalSideBar from "../../ui/ModalSideBar";

const DashboardPage = () => {
  // const appSignging = localStorage.getItem("_appSignging") || false;
  // console.log(appSignging);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { user, isLoadingUser, isPending } = useUser();
  console.log(user, isLoadingUser);
  useEffect(() => {
    // if (isPending && appSignging) return;
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
  return (
    !isLoadingUser &&
    user?.firstname && (
      <DashboardPanelLayout openMenu={() => setOpen(true)}>
        <div className="hidden md:flex">
          <MainSideBar onClose={() => setOpen(false)} />
        </div>
        <ModalSideBar
          onClose={() => setOpen(false)}
          open={open}
          title={"داشبورد"}
        >
          <MainSideBar onClose={() => setOpen(false)} />
        </ModalSideBar>
      </DashboardPanelLayout>
    )
  );
};

export default DashboardPage;
