import { useCart } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import Payment from "./Payment";
import CartItem from "./CartItem";

const MainCart = () => {
  const { cartCount } = useCart();

  return !cartCount ? (
    <EmptyCart />
  ) : (
    <div className="pt-8 px-5 lg:px-0 container flex flex-col md:flex-row justify-center gap-8">
      <CartItem />
      <Payment />
    </div>
  );
};

export default MainCart;
