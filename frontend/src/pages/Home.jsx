import React, { useContext } from "react";
import Hero from "../components/Hero";
import ProductLayout from "../components/ProductLayout";
import { DataContext } from "../context/ContextApi";
import FallBackLoader from "../components/FallBackLoader";
const Home = () => {
  const { data, loading, error, handleCategory } = useContext(DataContext);
  console.log(data);
  return (
    <section className="home z-0">
      <div className="container">
        <div className="my-5">
          <h1 className="uppercase text-center text-3xl font-bold  text-slate-900">
            Our <span className="text-orange-500 mb-5">Products</span>
          </h1>
          <p className="text-sm text-center text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            tempora?
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 ">
          <div className="lg:col-span-1 w-full">
            <div className="p-5 bg-white">
              <div className="flex items-center justify-between border-b pb-3">
                <h1 className="text-gray-600 font-bold text-sm">
                  Filter Product
                </h1>
                <button className="px-2 py-1 text-white bg-gray-700 hover:bg-red-600 text-xs rounded-full">
                  reset
                </button>
              </div>

              <div className="my-4 border-b pb-3">
                <h1 className="text-gray-600 font-bold text-sm">Search</h1>
                <fieldset className="w-full space-y-1 dark:text-gray-100">
                  <label htmlFor="Search" className="hidden">
                    Search
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <button
                        type="button"
                        title="search"
                        className="p-1 focus:outline-none focus:ring"
                      >
                        <svg
                          fill="currentColor"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 dark:text-gray-100"
                        >
                          <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                        </svg>
                      </button>
                    </span>
                    <input
                      type="search"
                      name="Search"
                      placeholder="Search..."
                      className="py-2 pl-10 text-sm rounded w-full focus:outline-none bg-gray-900 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
                    />
                  </div>
                </fieldset>
              </div>
              <div className="my-4 border-b pb-3">
                <h1 className="text-gray-600 font-bold text-sm">Price</h1>
                <input
                  id="slider"
                  type="range"
                  value="75"
                  className="w-full h-2 rounded-lg cursor-pointer accent-gray-600"
                />
                <p className="text-xs text-gray-600">Range: $120</p>
              </div>
              <div className="my-4 pb-3">
                <h1 className="text-gray-600 font-bold text-sm">Category</h1>
                <div className="my-2">
                  <p className="text-gray-600 text-xs mb-3 flex items-center">
                    <input
                      type="radio"
                      name="product"
                      className="mr-2 accent-gray-600 "
                      defaultChecked=""
                      id="all"
                      onClick={() => handleCategory("")}
                    />
                    <label className="cursor-pointer" htmlFor="all">
                      All products
                    </label>
                  </p>
                  <p className="text-gray-600 text-xs mb-3 flex items-center">
                    <input
                      type="radio"
                      name="product"
                      className="mr-2 accent-gray-600 "
                      defaultChecked=""
                      id="Bag"
                      onClick={() => handleCategory("Bag")}
                    />

                    <label className="cursor-pointer" htmlFor="Bag">
                      Bag
                    </label>
                  </p>
                  <p className="text-gray-600 text-xs mb-3 flex items-center">
                    <input
                      type="radio"
                      name="product"
                      className="mr-2 accent-gray-600"
                      defaultChecked=""
                      id="Bottle"
                      onClick={() => handleCategory("Bottle")}
                    />
                    <label className="cursor-pointer" htmlFor="Bottle">
                      Bottle
                    </label>
                  </p>
                  <p className="text-gray-600 text-xs mb-3 flex items-center">
                    <input
                      type="radio"
                      name="product"
                      className="mr-2 accent-gray-600"
                      defaultChecked=""
                      id="Cap"
                      onClick={() => handleCategory("Cap")}
                    />
                    <label className="cursor-pointer" htmlFor="Cap">
                      Cap
                    </label>
                  </p>
                  <p className="text-gray-600 text-xs mb-3 flex items-center">
                    <input
                      type="radio"
                      name="product"
                      className="mr-2 accent-gray-600"
                      defaultChecked=""
                      id="Earphones"
                      onClick={() => handleCategory("Earphones")}
                    />
                    <label className="cursor-pointer" htmlFor="Earphones">
                      Earphones
                    </label>
                  </p>
                  <p className="text-gray-600 text-xs mb-3 flex items-center">
                    <input
                      type="radio"
                      name="product"
                      className="mr-2 accent-gray-600"
                      defaultChecked=""
                      id="Men's Boot"
                      onClick={() => handleCategory("Men's Boot")}
                    />
                    <label className="cursor-pointer" htmlFor="Men's Boot">
                      Men's Boot
                    </label>
                  </p>
                  <p className="text-gray-600 text-xs mb-3 flex items-center">
                    <input
                      type="radio"
                      name="product"
                      className="mr-2 accent-gray-600"
                      defaultChecked=""
                      id="Men's Pants"
                      onClick={() => handleCategory("Men's Pants")}
                    />
                    <label className="cursor-pointer" htmlFor="Men's Pants">
                      Men's Pants
                    </label>
                  </p>
                  <p className="text-gray-600 text-xs mb-3 flex items-center">
                    <input
                      type="radio"
                      name="product"
                      className="mr-2 accent-gray-600"
                      defaultChecked=""
                      id="Men's Sneaker"
                      onClick={() => handleCategory("Men's Sneaker")}
                    />
                    <label className="cursor-pointer" htmlFor="Men's Sneaker">
                      Men's Sneaker
                    </label>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 w-full ">
            {loading ? (
              <FallBackLoader />
            ) : error ? (
              <h1>{error}</h1>
            ) : (
              <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data?.data?.products?.map((product) => (
                  <ProductLayout key={product._id} {...product} />
                ))}
                {data?.data?.products && (
                  <div className="flex justify-center space-x-1 dark:text-gray-100 items-center w-full mx-auto my-8">
                    <button
                      title="previous"
                      type="button"
                      className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    <button
                      type="button"
                      title="Page 1"
                      className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
                      title="Page 2"
                    >
                      2
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
                      title="Page 3"
                    >
                      3
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
                      title="Page 4"
                    >
                      4
                    </button>
                    <button
                      title="next"
                      type="button"
                      className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
