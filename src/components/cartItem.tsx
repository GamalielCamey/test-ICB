import { FC } from "react";

const CartItem = ({ cartItem }) => {
  const { price, name } = cartItem;

  return (
    <div className="">
      <div className="grid grid-cols-2 items-center gap-2">
        <span className="">{name}</span>
        <span className="">${price}</span>
      </div>
    </div>
  );
};
export default CartItem;
