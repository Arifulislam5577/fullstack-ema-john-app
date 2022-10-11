import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const DataContext = createContext([]);
const Layout = () => {
  const {
    data: { products, sliderProducts },
  } = useLoaderData();

  return (
    <DataContext.Provider value={{ products, sliderProducts }}>
      <Header />
      <Outlet />
      <Footer />
    </DataContext.Provider>
  );
};

export default Layout;
