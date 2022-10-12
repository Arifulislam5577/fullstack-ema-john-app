import React, { useContext } from "react";
import { DataContext } from "../Layout/Layout";

const CartItem = ({ _id, price, quantity, img, name, stock }) => {
  const { handleQuantity, removeFromCart } = useContext(DataContext);
  return (
    <div className="flex gap-5 justify-between">
      <img src={img} alt={name} className="h-20 w-20 text-xs" />
      <div className="flex flex-col justify-between items-center">
        <button
          className="text-sm font-bold h-5 w-5 bg-gray-200"
          onClick={() => {
            handleQuantity(_id, "decrement");
            quantity <= 1 && removeFromCart(_id);
          }}
        >
          -
        </button>
        <span className="text-sm text-gray-500">{quantity}</span>
        <button
          className="text-sm font-bold h-5 w-5 bg-gray-200"
          onClick={() => handleQuantity(_id, "increment")}
          disabled={quantity === stock}
        >
          +
        </button>
      </div>
      <h2 className=" text-sm  flex items-center justify-center">${price}</h2>

      <div className="flex items-center justify-center">
        <button
          className="text-xs  h-5 w-5 bg-orange-500 text-white"
          onClick={() => removeFromCart(_id)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default CartItem;
