import React, { useContext, useState } from "react";
import { BsCart3, BsHeart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { DataContext } from "../context/ContextApi";
import CartItem from "./CartItem";

const Header = () => {
  const { totalAmount, cart, totalPrice, loader, user } =
    useContext(DataContext);
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart((prev) => !prev);
  };

  showCart &&
    window.addEventListener("scroll", () => {
      setShowCart(false);
    });

  return (
    <header className="header bg-primary py-6 z-10">
      <div className="container relative">
        <div className="flex items-center justify-between">
          <div className="logo bg-slate-900 rounded skew-y-12 p-2">
            <Link to="/">
              <img src="images/Logo.svg" alt="" className="h-6 -skew-y-12" />
            </Link>
          </div>
          <nav className="flex items-center gap-5 relative">
            <button
              className="flex text-gray-500 items-center justify-center rounded-full p-2 relative"
              onClick={handleShowCart}
            >
              <BsCart3 color="gray" />
              <span className="text-xs  text-white -top-1 -right-3  absolute bg-slate-900 w-5 h-5 flex items-center justify-center rounded-full">
                {totalAmount < 10 ? "0" + totalAmount : totalAmount}
              </span>
            </button>
            <button>
              <BsHeart color="gray" />
            </button>
            <button>
              <FaRegUser color="gray" />
            </button>
          </nav>
        </div>
        <div
          className={`fixed w-72 z-10  h-full right-0 top-0 bg-white text-slate-900 p-5 overflow-auto shadow-2xl	 ${
            showCart ? "translate-x-0 box-shadow " : "translate-x-full"
          } transition-all duration-300`}
        >
          <button
            className="w-10 h-10 absolute left-0 top-0 bg-slate-900 flex items-center justify-center  text-sm"
            onClick={handleShowCart}
          >
            <ImCross size="10" color="white" />
          </button>
          <div className="flex flex-col justify-between  h-full">
            <div className="cart">
              <h2 className="text-center font-bold text-xl text-slate-900">
                Your Cart
              </h2>
              <hr className="my-2 border " />
              <div className="my-3 flex flex-col gap-5">
                {cart?.length <= 0 ? (
                  <h1 className="text-center text-xl my-3 font-bold text-gray-500 uppercase">
                    Empty Cart
                  </h1>
                ) : (
                  cart?.map((item) => <CartItem key={item._id} {...item} />)
                )}
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
