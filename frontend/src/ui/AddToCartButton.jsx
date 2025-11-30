import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const AddToCartButton = ({ id, name, price }) => {
  // const { user, isLoadingUser } = useUser();
  const { myCourse, isLoadingCourse, isLoadingUser, user } = useAuth();
  const { cartList, dispatch } = useCart();
  const course = !myCourse || myCourse === "error" ? [] : myCourse;
  const isEnroll = course?.some((c) => c?.id === id);
  const isExistInCart = cartList?.findIndex((cart) => cart?.id === id);
  console.log(isExistInCart);
  return (
    <div className="w-[200px] lg:w-full">
      {isLoadingCourse || isLoadingUser ? (
        <div className="w-full p-4 rounded-xl bg-secondary-200 animate-pulse"></div>
      ) : user?.id && isEnroll ? (
        <div className="w-full p-1.5 rounded-xl text-center bg-purple-900">
          <span className="text-xs text-white md:text-sm">
            شما دانشجو دوره هستید
          </span>
        </div>
      ) : isExistInCart === -1 ? (
        <button
          onClick={() => {
            dispatch({ type: "addedToCart", payload: { id, name, price } });
            toast.success(`دوره ${name} به سبد سفارش اضافه شد.`);
          }}
          className="w-full p-1.5 cursor-pointer rounded-xl text-center bg-purple-900"
        >
          <span className="text-xs text-white md:text-sm">
            افزودن به سبد سفارش
          </span>
        </button>
      ) : (
        <Link
          to={"/cart"}
          className="w-full p-1.5 cursor-pointer rounded-xl text-center inline-block bg-purple-900"
        >
          <span className="text-xs text-white md:text-sm">
            پرداخت و شروع یادگیری
          </span>
        </Link>
      )}
    </div>
  );
};

export default AddToCartButton;
