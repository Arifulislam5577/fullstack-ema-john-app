import React from "react";

const CartItem = () => {
  return (
    <div className="flex gap-5 justify-between">
      <img
        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg"
        alt=""
        className="h-20 w-20"
      />
      <div className="flex flex-col justify-between items-center">
        <button className="text-sm font-bold h-5 w-5 bg-gray-200">-</button>
        <span className="text-sm text-gray-500">12</span>
        <button className="text-sm font-bold h-5 w-5 bg-gray-200">+</button>
      </div>
      <h2 className=" text-sm  flex items-center justify-center">$230</h2>

      <div className="flex items-center justify-center">
        <button className="text-xs  h-5 w-5 bg-orange-500 text-white">x</button>
      </div>
    </div>
  );
};

export default CartItem;
