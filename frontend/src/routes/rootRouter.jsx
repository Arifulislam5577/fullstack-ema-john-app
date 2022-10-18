import Layout from "../Layout/Layout";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

export const rootRouter = [
  {
    path: "/",
    element: <Layout></Layout>,
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
];
