import { useCart } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import Payment from "./Payment";
import CartItem from "./CartItem";
import useMoveBack from "../../hooks/useMoveBack";
import { PiArrowLeftLight } from "react-icons/pi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import useAuth from "../../hooks/useAuth";

const MainCart = () => {
  const { cartList, cartCount, dispatch } = useCart();
  const moveBack = useMoveBack();
  const { myCourse, isLoadingCourse, isLoadingUser } = useAuth();
  const course = !myCourse || myCourse === "error" ? [] : myCourse;
  console.log(course);
  let isEnroll = cartList.filter((cart) =>
    course.some((c) => c.id === cart.id),
  );

  let isNotEnroll = cartList.filter(
    (cart) => !course.some((c) => c.id === cart.id),
  );
  console.log(isNotEnroll, isEnroll);
  useEffect(() => {
    if (isLoadingCourse) return; // هنوز API لود نشده
    if (!course) return; // هنوز به دست نیومده
    if (isEnroll.length === 0) return;
    isEnroll.forEach((enroll) => {
      toast.error(`دوره ${enroll?.name} قبلا ثبت‌نام شده`);
    });
    dispatch({ type: "removeIsEnrollCourse", payload: isNotEnroll });
  }, [isLoadingCourse, course, isEnroll, isNotEnroll]);

  const totalPrice = isNotEnroll?.reduce((prev, acc) => +prev + +acc?.price, 0);
  return isLoadingCourse || isLoadingUser ? (
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
          <Payment isLoadingCourse={isLoadingCourse} totalPrice={totalPrice} />
        </div>
      )}
    </div>
  );
};

export default MainCart;
