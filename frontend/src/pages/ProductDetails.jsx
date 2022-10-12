import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { DataContext } from "../Layout/Layout";

const ProductDetails = () => {
  const {
    data: { product, relatedProduct },
  } = useLoaderData();
  const { name, img, seller, category, stock, price, _id } = product;
  const { handleAddToCart } = useContext(DataContext);
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
              <button
                className="uppercase text-sm py-3 px-5 bg-slate-900 text-white"
                onClick={() => handleAddToCart(_id)}
              >
                add to cart
              </button>
              <button className="uppercase text-sm py-3 px-5 border border-gray-500 text-slate-900">
                add to wishlist
              </button>
            </div>

            <div className="my-3">
              <h2 className=" font-bold text-slate-900 uppercase mb-3">
                Related Product
              </h2>
              <div className="flex items-center justify-between gap-5">
                {relatedProduct.map((relPro) => (
                  <div key={relPro._id}>
                    <Link to={`/product/${relPro._id}`}>
                      <img
                        src={relPro.img}
                        alt={relPro.name}
                        className="w-full"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
