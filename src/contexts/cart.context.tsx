import { createContext, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (props) => {
    setCartItems(addCartItem(cartItems, props));
  };

  const value = { cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
