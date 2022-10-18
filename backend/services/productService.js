import ProductModel from "../model/productModel.js";
import { error } from "../utils/error.js";

export const findProduct = async (key, value) => {
  if (key === "id") {
    const product = await ProductModel.findById(value);
    if (!product) throw error("Product not found", 400);
    return product;
  } else if (key === "category") {
    const products = await ProductModel.find({
      key: value,
    });
    return products;
  }
};

export const createProductInDB = async (product) => {
  try {
    const product = await ProductModel({ ...product });
    return await product.save();
  } catch (error) {
    throw error(error.message, 500);
  }
};

export const bestSellerProduct = async (products) => {
  const bestRatings = await products.sort(
    (a, b) => b.ratingsCount - a.ratingsCount
  );

  const bestSeller = await bestRatings
    .sort((a, b) => b.ratings - a.ratings)
    .slice(0, 4);
  return bestSeller;
};
