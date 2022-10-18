import React, { useContext } from "react";
import Hero from "../components/Hero";
import ProductLayout from "../components/ProductLayout";
import { DataContext } from "../Layout/Layout";

const Home = () => {
  const { products, sliderProducts, bestSeller } = useContext(DataContext);
  return (
    <section className="home py-5 z-0">
      <div className="container">
        <div className="my-5">
          <Hero sliderProducts={sliderProducts} />
        </div>
        <div className="my-5">
          <h1 className="uppercase text-center text-3xl font-bold  text-slate-900">
            Best <span className="text-orange-500 mb-5">Seller</span>
          </h1>
          <p className="text-sm text-center text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            tempora?
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-5">
            {bestSeller?.map((product) => (
              <ProductLayout key={product._id} {...product} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-5">
          {products?.map((product) => (
            <ProductLayout key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
