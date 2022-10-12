import React, { useContext } from "react";
import { useEffect } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Layout/Layout";
const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, handleQuantity } = useContext(DataContext);

  useEffect(() => {
    if (!cart.length) {
      navigate("/");
    }
  }, []);
  return (
    <section className="py-5">
      <div className="container">
        <div className="grid grid-cols-5 gap-5 items-center justify-between">
          <div className="col-span-3">
            {cart.map((product) => (
              <div
                key={product._id}
                className="border-b-2 py-3 flex items-center justify-between"
              >
                <img
                  src={product.img}
                  className="h-20 w-20"
                  alt={product.name}
                />
                <div>
                  <h2 className="text-sm text-gray-500 mb-1">
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
          <div className="col-span-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis molestiae, ducimus maiores odit repellendus quo
              exercitationem vel quis quisquam alias quos architecto sunt
              inventore dolorum recusandae? Neque quo impedit laudantium!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
