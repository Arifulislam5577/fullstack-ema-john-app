import React, { useContext } from "react";
import Hero from "../components/Hero";
import ProductLayout from "../components/ProductLayout";
import { DataContext } from "../Layout/Layout";

const Home = () => {
  const { products, sliderProducts } = useContext(DataContext);
  return (
    <section className="home py-5 z-0">
      <div className="container">
        <div className="my-5">
          <Hero sliderProducts={sliderProducts} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <ProductLayout key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
