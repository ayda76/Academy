import { Link } from "react-router";
import Navbar from "./Navbar";
import useUser from "../../hooks/auth/useUser";
import { PiList, PiSignOut, PiUser, PiUserCircle } from "react-icons/pi";
import { useState } from "react";
import ModalSideBar from "../../ui/ModalSideBar";
import ConfirmSignOut from "../../ui/ConfirmSignOut";
const Header = () => {
  const { user, isLoadingUser } = useUser();
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  console.log(isLoadingUser);
  return (
    <header
      className={`${isLoadingUser && "blur-sm"} sticky z-40 inset-0 p-2.5 px-6 shadow-md flex items-center justify-between bg-secondary-50`}
    >
      <PiList className="flex md:hidden" onClick={() => setOpen(true)} />
      <Link to="/" className="text-purple-800 font-semibold">
        آکادمی
      </Link>
      <div className="hidden md:flex">
        <Navbar />
      </div>
      {user?.id ? (
        <div className="flex items-center gap-3">
          <button
            title="خروج"
            onClick={() => setOpenConfirm(true)}
            className="text-secondary-500 hover:text-error text-2xl"
          >
            <PiSignOut />
          </button>
          <Link
            to={"/dashboard"}
            className="border border-purple-800 text-purple-800 p-1 text-xl rounded-full"
          >
            <PiUser />
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <Link
            to={"/auth/signin"}
            className="bg-purple-800 border border-purple-800 text-white p-1 text-sm rounded-md w-[60px] text-center"
          >
            ورود
          </Link>
          <Link
            to={"/auth/signup"}
            className="border border-purple-800 bg-white text-purple-800 p-1 text-sm rounded-md w-[60px] text-center"
          >
            ثبت‌نام
          </Link>
        </div>
      )}

      {open && (
        <ModalSideBar title={"آکادمی"} onClose={() => setOpen(false)}>
          <Navbar />
        </ModalSideBar>
      )}
      {openConfirm && <ConfirmSignOut onClose={() => setOpenConfirm(false)} />}
    </header>
  );
};

export default Header;
