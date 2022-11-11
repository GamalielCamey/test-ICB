import { FC, useContext } from "react";
import { CartContext } from "../contexts/cart.context";

import CartItem from "./cartItem";

const Cart: FC = ({ toggleCart }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="fixed right-0 z-40 h-screen w-80 overflow-y-auto bg-white p-4 dark:bg-gray-800">
      <h5 className="text-base font-semibold uppercase text-gray-500 dark:text-gray-400">
        Your Cart
      </h5>
      <button
        onClick={() => toggleCart()}
        type="button"
        data-drawer-dismiss="drawer-navigation"
        aria-controls="drawer-navigation"
        className="absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>

      <div className="">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={Math.random()} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <div className="mt-5 inline-flex items-center rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
        <h2 className=" text-lg">
          Your total $
          {cartItems.reduce((total, cartItem) => total + cartItem.price, 0)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
