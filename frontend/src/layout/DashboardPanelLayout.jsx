import { Outlet } from "react-router";
import DashboardHeader from "../ui/DashboardHeader";

const DashboardPanelLayout = ({ children, openMenu }) => {
  return (
    <div className="h-screen flex flex-col">
      <DashboardHeader openMenu={openMenu} />
      <div className="flex flex-1 min-h-0">
        {children}
        <div className="flex-1 p-5 bg-secondary-0 overflow-y-auto min-h-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPanelLayout;
