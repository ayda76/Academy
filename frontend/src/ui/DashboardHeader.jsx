import { useState } from "react";
import { Link } from "react-router-dom";
import { PiList, PiSignOut } from "react-icons/pi";
import ProfileAvatar from "./ProfileAvatar";
import useUser from "../hooks/auth/useUser";
import ConfirmSignOut from "./ConfirmSignOut";

const DashboardHeader = ({ openMenu }) => {
  const { user, isLoadingUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`p-3 px-5 bg-secondary-50 border-b border-secondary-200 flex items-center justify-between
         ${isLoadingUser && "blur-sm"}`}
    >
      <ProfileAvatar
        avatarUrl={user?.avatarUrl}
        name={user?.firstname + " " + user?.lastname}
      />

      <div className="flex items-center gap-3">
        <Link to={"/"} className="flex items-center gap-0.5 md:gap-2">
          <span className="text-xs md:text-sm">صفحه اصلی</span>
        </Link>
        <PiSignOut
          onClick={() => setIsOpen(true)}
          className="hover:text-error text-lg cursor-pointer"
          title="خروج"
        />
        <button
          onClick={openMenu}
          className="cursor-pointer inline-block md:hidden"
        >
          <PiList />
        </button>
      </div>
      {isOpen && <ConfirmSignOut onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default DashboardHeader;
