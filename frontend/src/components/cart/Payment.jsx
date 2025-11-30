import { PiWalletBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import useUser from "../../hooks/auth/useUser";

const Payment = ({ isLoadingCourse, totalPrice }) => {
  const location = useLocation();
  const { cartCount, dispatch } = useCart();
  const { user, isLoadingUser } = useUser();
  return (
    <div className="flex flex-col gap-4 w-full md:w-[400px] rounded-lg p-4 border border-secondary-200">
      <div className="flex items-center gap-1">
        <PiWalletBold className="text-lg text-secondary-600" />
        <span className="text-secondary-600 text-sm">جزئیات پرداخت</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-secondary-800 text-sm">
          مبلغ کل آموزش ها ({cartCount})
        </span>
        <span className="text-secondary-800 text-sm">{totalPrice} تومان</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-purple-900 text-sm">مبلغ پرداختی</span>
        <span className="text-purple-900 text-sm">{totalPrice} تومان</span>
      </div>
      {isLoadingUser || isLoadingCourse ? (
        <div className="w-full rounded-lg p-5 mt-5 bg-secondary-300 animate-pulse"></div>
      ) : user?.id ? (
        <button
          onClick={() => dispatch({ type: "payment" })}
          className="w-full p-1.5 mt-5 cursor-pointer rounded-xl text-center bg-purple-900"
        >
          <span className="text-xs text-white md:text-sm">پرداخت</span>
        </button>
      ) : (
        <div className="flex flex-col gap-3 mt-5">
          <span className="text-xs text-secondary-700">
            جهت تسویه حساب، وارد حساب کاربری خود شوید.
          </span>
          <Link
            to={"/auth/signin"}
            state={{ from: location.pathname }}
            className="w-full p-1.5 cursor-pointer rounded-xl text-center inline-block bg-purple-900"
          >
            <span className="text-xs text-white md:text-sm">ورود</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Payment;
