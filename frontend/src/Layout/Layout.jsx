import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  addCart,
  calcTotal,
  deleteItem,
  findProduct,
  getCart,
  manageQty,
  saveCart,
} from "../utils/productSerivce";

export const DataContext = createContext([]);
const Layout = () => {
  const {
    data: { products, sliderProducts },
  } = useLoaderData();

  const [cart, setCart] = useState(getCart());
  const handleAddToCart = (id) => {
    addCart(id, cart, setCart, products);
  };
  const handleQuantity = (id, value) => {
    manageQty(id, value, cart, setCart);
  };
  const removeFromCart = (id) => {
    deleteItem(id, cart, setCart);
  };
  const totalPrice = calcTotal(cart, "price");
  const totalAmount = calcTotal(cart, "quantity");

  saveCart(cart);

  return (
    <DataContext.Provider
      value={{
        products,
        sliderProducts,
        handleAddToCart,
        cart,
        totalPrice,
        totalAmount,
        handleQuantity,
        removeFromCart,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </DataContext.Provider>
  );
};

export default Layout;
