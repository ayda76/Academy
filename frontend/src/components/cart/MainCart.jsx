import { useCart } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import Payment from "./Payment";
import CartItem from "./CartItem";
import useMoveBack from "../../hooks/useMoveBack";
import { PiArrowLeftLight } from "react-icons/pi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import useUser from "../../hooks/auth/useUser";

const MainCart = () => {
  const { cartList, cartCount, dispatch } = useCart();
  const moveBack = useMoveBack();
  const { user, isLoadingUser } = useUser();
  let isEnroll = cartList?.filter((cart) =>
    user?.all_courses?.some((id) => id === cart.id),
  );

  let isNotEnroll = cartList?.filter(
    (cart) => !user?.all_courses?.some((id) => id === cart.id),
  );
  console.log(isNotEnroll, isEnroll);
  useEffect(() => {
    if (isLoadingUser) return;
    if (isEnroll.length === 0) return;
    isEnroll.forEach((enroll) => {
      toast.error(`دوره ${enroll?.name} قبلا ثبت‌نام شده`);
    });
    dispatch({ type: "removeIsEnrollCourse", payload: isNotEnroll });
  }, [isEnroll, isNotEnroll, isLoadingUser]);

  const totalPrice = isNotEnroll?.reduce((prev, acc) => +prev + +acc?.price, 0);
  return isLoadingUser ? (
    <Loading />
  ) : (
    <div className="pt-5 space-y-4">
      <div className="px-5 flex justify-end">
        <button
          onClick={moveBack}
          className="flex items-center gap-x-2 cursor-pointer"
        >
          <span> بازگشت</span>
          <PiArrowLeftLight className="text-primary-900" />
        </button>
      </div>
      {!cartCount ? (
        <EmptyCart />
      ) : (
        <div className="px-5 lg:px-0 container flex flex-col md:flex-row justify-center gap-8">
          <CartItem isNotEnroll={isNotEnroll} />
          <Payment user={user} totalPrice={totalPrice} />
        </div>
      )}
    </div>
  );
};

export default MainCart;
