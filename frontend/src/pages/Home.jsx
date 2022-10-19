import React, { useContext } from "react";
import Hero from "../components/Hero";
import ProductLayout from "../components/ProductLayout";
import { DataContext } from "../context/ContextApi";
import FallBackLoader from "../components/FallBackLoader";
const Home = () => {
  const { data, loading, error } = useContext(DataContext);
  console.log(data);
  // const { bestSeller, sliderProducts, products } = Object.keys(productData)
  //   .length
  //   ? productData
  //   : {};

  if (loading) {
    return <FallBackLoader />;
  } else if (error) {
    return (
      <section className="home py-5 z-0">
        <div className="container">
          <h1>{error}</h1>
        </div>
      </section>
    );
  } else {
    return (
      <section className="home py-5 z-0">
        <div className="container">
          <div className="my-5">
            <Hero sliderProducts={data?.data?.sliderProducts} />
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
              {data?.data?.bestSeller?.map((product) => (
                <ProductLayout key={product._id} {...product} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-5">
            {data?.data?.products?.map((product) => (
              <ProductLayout key={product._id} {...product} />
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default Home;
