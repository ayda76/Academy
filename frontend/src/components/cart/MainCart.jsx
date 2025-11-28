import { useCart } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import Payment from "./Payment";
import CartItem from "./CartItem";
import useMoveBack from "../../hooks/useMoveBack";
import { PiArrowLeftLight } from "react-icons/pi";

const MainCart = () => {
  const { cartCount } = useCart();
  const moveBack = useMoveBack();

  return !cartCount ? (
    <EmptyCart />
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
      <div className="px-5 lg:px-0 container flex flex-col md:flex-row justify-center gap-8">
        <CartItem />
        <Payment />
      </div>
    </div>
  );
};

export default MainCart;
