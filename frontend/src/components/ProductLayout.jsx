import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProductLayout = ({ _id, name, price, img }) => {
  return (
    <div className="col-span-1 bg-white p-4  shadow relative overflow-hidden">
      <div className="product-img">
        <Link to={`/product/${_id}`}>
          <img src={img} alt={name} />
        </Link>
      </div>
      <div className="details mt-3">
        <h2 className="md:text-sm text-xs">{name}</h2>
        <h3 className="text-base mt-2">${price}</h3>
      </div>
      <button className="absolute block bottom-0 right-0  bg-slate-900 p-3 hover:bg-orange-500 transition-all duration-300">
        <BsCart3 color="white" size="15" />
      </button>
    </div>
  );
};

export default ProductLayout;
