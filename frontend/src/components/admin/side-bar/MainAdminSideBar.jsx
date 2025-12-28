import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavLink from "../../../ui/NavLink";

const MainAdminSideBar = ({ onClose }) => {
  const { pathname } = useLocation();
  const [prevPath, setPrevPath] = useState(pathname);
  useEffect(() => {
    if (prevPath !== pathname) onClose();
  }, [prevPath, pathname]);
  return (
    <div
      className={`w-full md:w-[180px] h-full md:border-l md:border-l-secondary-200 md:bg-secondary-50`}
    >
      <ul className="flex flex-col gap-5 md:p-4">
        <NavLink
          path={"/admin/organization"}
          title={"سازمان‌ها"}
          // icon={<PiUser />}
        />
        <NavLink
          path={"/admin/term"}
          title={"ترم‌ها"}
          // icon={<PiBooksLight />}
        />
        <NavLink
          path={"/admin/lessons"}
          title={"درس‌ها"}
          // icon={<PiBooksLight />}
        />
        <NavLink
          path={"/admin/courses"}
          title={"دوره‌ها"}
          // icon={<PiPassword />}
        />
      </ul>
    </div>
  );
};

export default MainAdminSideBar;
