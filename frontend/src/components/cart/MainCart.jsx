import { PiWalletBold, PiX } from "react-icons/pi";
import { useCart } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import useUser from "../../hooks/auth/useUser";
import { Link, useLocation } from "react-router-dom";

const MainCart = () => {
  const location = useLocation();
  const { cartList, cartCount, dispatch } = useCart();
  const { user, isLoadingUser } = useUser();
  const totalPrice = cartList?.reduce((prev, acc) => +prev + +acc?.price, 0);

  return !cartCount ? (
    <EmptyCart />
  ) : (
    <div className="pt-8 px-5 lg:px-0 container flex flex-col md:flex-row justify-center gap-8">
      <div className="basis-1/3">
        {cartList?.map((cart) => (
          <div
            key={cart?.id}
            className="p-2 border-t border-t-secondary-300 first:border-none flex items-center justify-between bg-secondary-100"
          >
            <h5 className="line-clamp-1 text-sm w-1/2">دوره {cart?.name}</h5>
            <span className="text-sm">{+cart?.price} تومان</span>
            <PiX
              className="cursor-pointer"
              onClick={() => dispatch({ type: "removeFromCart", id: cart?.id })}
            />
          </div>
        ))}
      </div>
      {/* فاکتور */}
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
        {isLoadingUser ? (
          <div className="w-full rounded-lg p-2 bg-secondary-300 animate-pulse"></div>
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
    </div>
  );
};

export default MainCart;
