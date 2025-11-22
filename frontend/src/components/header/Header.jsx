import { Link } from "react-router";
import Navbar from "./Navbar";
import useUser from "../../hooks/auth/useUser";
import {
  PiList,
  PiShoppingCartSimpleLight,
  PiSignOut,
  PiUser,
  PiUserCircle,
} from "react-icons/pi";
import { useState } from "react";
import ModalSideBar from "../../ui/ModalSideBar";
import ConfirmSignOut from "../../ui/ConfirmSignOut";
import { useCart } from "../../context/CartContext";
const Header = () => {
  const { cartCount } = useCart();
  const { user, isLoadingUser } = useUser();
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  console.log(isLoadingUser);
  return (
    <header
      className={`${isLoadingUser && "blur-sm"} sticky z-40 inset-0 p-2.5 md:px-6 shadow-md flex items-center justify-between bg-secondary-50`}
    >
      <PiList className="flex md:hidden" onClick={() => setOpen(true)} />
      <Link to="/" className="text-purple-800 font-semibold">
        آکادمی
      </Link>
      <div className="hidden md:flex">
        <Navbar />
      </div>

      <div className="flex items-center gap-2">
        <Link to={"/cart"} className="relative bg-secondary-100 p-1 rounded-md">
          {cartCount > 0 && (
            <span className="bg-error absolute -top-2 -right-2 h-5 w-5 rounded-full flex items-center justify-center text-[10px] leading-0 text-white">
              {cartCount}
            </span>
          )}
          <PiShoppingCartSimpleLight className="text-xl" />
        </Link>
        {user?.id ? (
          <div className="flex items-center gap-3 pr-2 border-r border-r-secondary-200">
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
          <div className="flex items-center gap-3 pr-2 border-r border-r-secondary-200">
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
      </div>

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
