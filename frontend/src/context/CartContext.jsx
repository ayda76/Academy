import { createContext, useContext, useReducer } from "react";

const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addedToCart": {
      const newList = [...state.cartList, action.payload];

      return {
        ...state,
        cartList: newList,
        cartCount: newList.length,
      };
    }

    case "removeFromCart": {
      const newList = state.cartList?.filter((cart) => cart?.id !== action.id);
      console.log(newList);
      return {
        ...state,
        cartList: newList,
        cartCount: newList.length,
      };
    }

    case "payment": {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
};

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  return (
    <CartContext.Provider
      value={{
        cartList: state.cartList,
        cartCount: state.cartCount,
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
