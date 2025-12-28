import { useState } from "react";
import DashboardPanelLayout from "../../layout/DashboardPanelLayout";
import ModalSideBar from "../../ui/ModalSideBar";
import MainAdminSideBar from "../../components/admin/side-bar/MainAdminSideBar";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <DashboardPanelLayout openMenu={() => setOpen(true)}>
      <div className="hidden md:flex">
        <MainAdminSideBar onClose={() => setOpen(false)} />
      </div>
      <ModalSideBar
        onClose={() => setOpen(false)}
        open={open}
        title={"داشبورد"}
      >
        <MainAdminSideBar onClose={() => setOpen(false)} />
      </ModalSideBar>
    </DashboardPanelLayout>
  );
};

export default AdminPage;
