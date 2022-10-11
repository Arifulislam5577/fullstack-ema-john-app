import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FallBackLoader from "./components/FallBackLoader";
import Layout from "./Layout/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      loader: async () => await fetch("/api/v1/products"),
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "cart", element: <Cart /> },
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
