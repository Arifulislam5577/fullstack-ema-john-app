import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FallBackLoader from "./components/FallBackLoader";
import Layout from "./Layout/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Signup from "./pages/Signup";
import { router } from "./routes/rootRouter";

const App = () => {
  return (
    <RouterProvider router={router} fallbackElement={<FallBackLoader />} />
  );
};

export default App;
