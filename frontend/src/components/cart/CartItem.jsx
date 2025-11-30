import { PiX } from "react-icons/pi";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";

const CartItem = ({ isNotEnroll }) => {
  const { dispatch } = useCart();
  return (
    <div className="basis-1/3">
      {isNotEnroll?.map((cart) => (
        <div
          key={cart?.id}
          className="p-2 border-t border-t-secondary-300 first:border-none flex items-center justify-between bg-secondary-100"
        >
          <h5 className="line-clamp-1 text-sm w-1/2">دوره {cart?.name}</h5>
          <span className="text-sm">{+cart?.price} تومان</span>
          <PiX
            className="cursor-pointer"
            onClick={() => {
              dispatch({ type: "removeFromCart", id: cart?.id });
              toast.error(`دوره ${cart?.name} از سبد سفارش حذف شد.`);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CartItem;
