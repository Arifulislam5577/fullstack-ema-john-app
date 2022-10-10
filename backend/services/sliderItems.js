import ProductModel from "../model/productModel.js";
export const sliderItems = async (categories) => {
  const items = [];
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const products = await ProductModel.find({ category });
    items.push(products[Math.floor(Math.random() * products.length)]);
  }

  return items;
};
