import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import CartItem from "./CartItem";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <header className="header bg-slate-900 py-5 ">
      <div className="container relative">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Link to="/">
              <img src="images/Logo.svg" alt="emajhon" className="h-8" />
            </Link>
          </div>
          <nav className="flex items-center gap-5 relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-500 " : "text-white"
              }
            >
              <FaHome size="20" />
            </NavLink>
            <button className="flex text-white" onClick={handleShowCart}>
              <BsCart3 size="20" />
              <span className="text-xs bg-orange-500 p-1 ml-1 text-white">
                12
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
                <CartItem />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="font-bold text-sm uppercase tracking-wider">
                  Total
                </h2>
                <h2 className="text-sm uppercase tracking-wider">$2300</h2>
              </div>
              <div className="flex items-center gap-1 flex-col">
                <button className="px-3 uppercase text-xs w-32 py-2 bg-slate-900 text-white">
                  Order now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
