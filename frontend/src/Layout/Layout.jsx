import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  addCart,
  calcTotal,
  deleteItem,
  getCart,
  manageQty,
  saveCart,
} from "../utils/productSerivce";

export const DataContext = createContext([]);

const Layout = () => {
  const {
    data: { products, sliderProducts, bestSeller },
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
  const shippingCharge = totalPrice > 500 ? 0 : 50;
  const vatCharge = parseInt(totalPrice * 0.05);
  const totalAmount = calcTotal(cart, "quantity");
  const total = parseInt(totalPrice + shippingCharge + vatCharge);

  saveCart(cart);

  return (
    <DataContext.Provider
      value={{
        products,
        sliderProducts,
        bestSeller,
        handleAddToCart,
        shippingCharge,
        cart,
        totalPrice,
        vatCharge,
        totalAmount,
        handleQuantity,
        removeFromCart,
        total,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </DataContext.Provider>
  );
};

export default Layout;
