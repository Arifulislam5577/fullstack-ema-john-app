import React from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import ProductLayout from "../components/ProductLayout";

const Home = () => {
  const {
    data: { products, sliderProducts },
  } = useLoaderData();

  return (
    <section className="home py-5 z-0">
      <div className="container">
        <div className="my-5">
          <Hero sliderProducts={sliderProducts} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductLayout key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
