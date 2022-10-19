import React, { useContext } from "react";
import { useEffect } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/ContextApi";
const Cart = () => {
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    handleQuantity,
    totalPrice,
    shippingCharge,
    totalAmount,
    vatCharge,
    total,
  } = useContext(DataContext);

  useEffect(() => {
    if (!cart.length) {
      navigate("/");
    }
  }, [cart, navigate]);
  return (
    <section className="py-5">
      <div className="container">
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-5 items-center justify-between">
          <div className="lg:col-span-3 w-full">
            {cart?.map((product) => (
              <div
                key={product._id}
                className="border-b border-gray-300 py-3 flex items-center justify-between"
              >
                <img
                  src={product.img}
                  className="h-20 w-20"
                  alt={product.name}
                />
                <div>
                  <h2 className="text-sm text-gray-500 mb-1 md:block hidden">
                    {product.name.split(" ").slice(0, 3).join(" ")}
                  </h2>
                  <h2 className="font-bold text-gray-500 text-sm">
                    ${product.price}
                  </h2>
                </div>
                <div className="flex gap-3 justify-between items-center">
                  <button
                    className="text-sm font-bold h-5 w-5 bg-gray-200 flex items-center justify-center"
                    onClick={() => {
                      handleQuantity(product._id, "decrement");
                      product.quantity <= 1 && removeFromCart(product._id);
                    }}
                  >
                    <BiMinus color="gray" />
                  </button>
                  <span className="text-sm text-gray-500">
                    {product.quantity}
                  </span>
                  <button
                    className="text-sm font-bold h-5 w-5 bg-gray-200 flex items-center justify-center"
                    onClick={() => handleQuantity(product._id, "increment")}
                    disabled={product.quantity === product.stock}
                  >
                    <BsPlus color="gray" />
                  </button>
                </div>

                <h2>${product.quantity * product.price}</h2>
                <button
                  className="text-xs flex items-center justify-center  h-5 w-5"
                  onClick={() => removeFromCart(product._id)}
                >
                  <ImCross color="gray" size="12" />
                </button>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 w-full border-l border-gray-300">
            <div className="p-5">
              <h2 className=" mb-3">Cart Totals</h2>
              <div className="flex items-center justify-between border-t border-b py-3 text-gray-600 text-sm">
                <h3>Total items</h3>
                <h3>{totalAmount}</h3>
              </div>
              <div className="flex items-center justify-between border-t border-b py-3 text-gray-600 text-sm">
                <h3>Subtotals</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className="flex items-center justify-between border-t border-b py-3 text-gray-600 text-sm">
                <h3>VAT+</h3>
                <h3>${vatCharge}</h3>
              </div>
              <div className="flex items-center justify-between border-t border-b py-3 text-gray-600 text-sm">
                <h3>Shipping</h3>
                <h3>
                  {shippingCharge === 0
                    ? "Free shipping"
                    : "$" + shippingCharge}
                </h3>
              </div>
              <div className="flex items-center justify-between border-t border-b py-3 text-gray-600 text-sm">
                <h3>Total</h3>
                <h3>${total}</h3>
              </div>

              <button className="block py-3 px-6 bg-gray-300 text-gray-600 uppercase text-sm w-full">
                order now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
