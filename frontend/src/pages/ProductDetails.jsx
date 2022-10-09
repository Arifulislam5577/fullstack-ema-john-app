import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const { data } = useLoaderData();
  const { name, img, seller, category, stock, price } = data.product;

  return (
    <section className="py-5">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="col-span-1">
            <img src={img} alt={name} />
          </div>
          <div className="col-span-1">
            <p className="text-xs mb-2 bg-orange-500 inline-block py-1 px-3 text-white">
              {seller}
            </p>
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-sm text-gray-400 my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolore
              quos consequuntur saepe, consectetur corrupti velit distinctio
              quaerat dignissimos rerum minus a hic minima! Id maiores illo quae
              accusamus adipisci!
            </p>

            <p className="text-sm mb-2">
              Category: <span className="text-orange-500">{category}</span>
            </p>
            <p className="text-sm mb-2">
              Stock:{" "}
              <span className="text-orange-500">
                {stock === 0 ? "Out of Stock" : "In Stock"}
              </span>
            </p>

            <p className="text-sm mb-2">
              Price: <span className="text-orange-500 font-bold">${price}</span>
            </p>

            <div className="my-3 flex items-center gap-5">
              <button className="uppercase text-sm py-3 px-5 bg-slate-900 text-white">
                add to cart
              </button>
              <button className="uppercase text-sm py-3 px-5 bg-orange-500 text-white">
                add to wishlist
              </button>
            </div>

            <div className="my-3">
              <h2 className=" font-bold text-slate-900 uppercase mb-3">
                Related Product
              </h2>
              <div className="flex items-center justify-between gap-5">
                <div>
                  <img
                    src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div>
                  <img
                    src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div>
                  <img
                    src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
