import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const loadCart = () => {
  try {
    const saved = localStorage.getItem("academy_cart");
    return saved
      ? JSON.parse(saved)
      : {
          cartList: [],
          cartCount: 0,
        };
  } catch {
    return {
      cartList: [],
      cartCount: 0,
    };
  }
};
const INITIAL_STATE = loadCart() || {
  cartList: [],
  cartCount: 0,
};
console.log(INITIAL_STATE);
const cartReducer = (state, action) => {
  switch (action.type) {
    case "addedToCart": {
      const newList = [...state?.cartList, action?.payload];
      localStorage.setItem(
        "academy_cart",
        JSON.stringify({
          ...state,
          cartList: newList,
          cartCount: newList?.length,
        }),
      );

      return {
        ...state,
        cartList: newList,
        cartCount: newList?.length,
      };
    }

    case "removeIsEnrollCourse": {
      const newList = action.payload;
      localStorage.setItem(
        "academy_cart",
        JSON.stringify({
          ...state,
          cartList: newList,
          cartCount: newList?.length,
        }),
      );

      return {
        ...state,
        cartList: newList,
        cartCount: newList?.length,
      };
    }

    case "removeFromCart": {
      const newList = state?.cartList?.filter((cart) => cart?.id !== action.id);
      localStorage.setItem(
        "academy_cart",
        JSON.stringify({
          ...state,
          cartList: newList,
          cartCount: newList?.length,
        }),
      );

      return {
        ...state,
        cartList: newList,
        cartCount: newList?.length,
      };
    }

    case "payment": {
      localStorage.removeItem("academy_cart");
      return {
        cartList: [],
        cartCount: 0,
      };
    }

    default:
      return state;
  }
};

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE, loadCart);

  return (
    <CartContext.Provider
      value={{
        cartList: state?.cartList || [],
        cartCount: state?.cartCount || 0,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) throw new Error("not found Cart Context");
  return context;
}
