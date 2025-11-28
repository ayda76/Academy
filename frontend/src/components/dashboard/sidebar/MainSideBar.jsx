import {
  PiBooksLight,
  PiHouseLight,
  PiInfo,
  PiPassword,
  PiUser,
} from "react-icons/pi";
import NavLink from "../../../ui/NavLink";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MainSideBar = ({ onClose }) => {
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
          path={"/dashboard/user"}
          title={"اطلاعات من"}
          icon={<PiUser />}
        />
        <NavLink
          path={"/dashboard/change-password"}
          title={"تغییر کلمه عبور"}
          icon={<PiPassword />}
        />
        <NavLink
          path={"/dashboard/course"}
          title={"دوره‌های من"}
          icon={<PiBooksLight />}
        />
      </ul>
    </div>
  );
};

export default MainSideBar;
