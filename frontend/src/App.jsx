import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FallBackLoader from "./components/FallBackLoader";
import Layout from "./Layout/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Signup from "./pages/Signup";
import { rootRouter } from "./routes/rootRouter";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "cart", element: <Cart /> },
        { path: "login", element: <Login /> },
        { path: "signin", element: <Signup /> },
        {
          path: "product/:id",
          loader: async ({ params }) =>
            await fetch(`/api/v1/products/${params.id}`),
          element: <ProductDetails />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} fallbackElement={<FallBackLoader />} />
  );
};

export default App;
