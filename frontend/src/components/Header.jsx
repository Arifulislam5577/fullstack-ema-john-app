import React, { useContext, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DataContext } from "../Layout/Layout";
import CartItem from "./CartItem";

const Header = () => {
  const { totalAmount, cart, totalPrice } = useContext(DataContext);
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <header className="header bg-primary py-6 ">
      <div className="container relative">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Link to="/">
              {/* <img
                src="https://res.cloudinary.com/arif5577/image/upload/v1665313084/Ema-John-FullStack/Logo_fdetcz.svg"
                alt="emajhon"
                className="h-8"
              /> */}
              <p className="font-bold text-xl">
                Ema-<span className="text-orange-500">John</span>
              </p>
            </Link>
          </div>
          <nav className="flex items-center gap-5 relative">
            <button className="flex text-slate-500" onClick={handleShowCart}>
              <BsCart3 size="20" />
              <span className="text-xs font-bold text-orange-500 -mt-2">
                {totalAmount}
              </span>
            </button>
          </nav>
        </div>
        <div
          className={`fixed w-72 z-10  h-full right-0 top-0 bg-white text-slate-900 p-5 overflow-auto shadow-2xl	 ${
            showCart ? "translate-x-0 box-shadow " : "translate-x-full"
          } transition-all duration-300`}
        >
          <button
            className="w-10 h-10 absolute left-0 top-0 bg-orange-500 flex items-center justify-center text-white text-sm"
            onClick={handleShowCart}
          >
            X
          </button>
          <div className="flex flex-col justify-between  h-full">
            <div className="cart">
              <h2 className="text-center font-bold text-xl text-slate-900">
                Your Cart
              </h2>
              <hr className="my-2 border " />
              <div className="my-3 flex flex-col gap-5">
                {cart?.map((item) => (
                  <CartItem key={item._id} {...item} />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="font-bold text-sm uppercase tracking-wider">
                  Total
                </h2>
                <h2 className="text-sm uppercase tracking-wider">
                  ${totalPrice}
                </h2>
              </div>
              <div className="flex items-center gap-1 flex-col">
                <Link
                  to="/cart"
                  className="px-3 uppercase text-center text-xs w-32 py-2 bg-slate-900 text-white"
                >
                  Order now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
