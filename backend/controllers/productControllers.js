import ProductModel from "../model/productModel.js";
import { createProductInDB, findProduct } from "../services/productService.js";
import { sliderItems } from "../services/sliderItems.js";
import { error } from "../utils/error.js";

/**
 'Bag',
 'Bottle',
 'Cap',
 'Earphones',
 "Men's Boot",
 "Men's Pants",
 "Men's Sneaker"
*/
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductModel.find();
    if (products.length > 0) {
      const categories = await ProductModel.distinct("category");
      const sliderProducts = await sliderItems(categories);

      return res.status(200).json({
        status: 200,
        success: true,
        data: {
          products,
          sliderProducts,
        },
      });
    } else {
      throw error("No Product found", 400);
    }
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  const {
    name,
    category,
    img,
    seller,
    price,
    ratings,
    shipping,
    ratingsCount,
    stock,
    quantity,
  } = req.body;

  const product = {
    name,
    category,
    img,
    seller,
    price,
    ratings,
    shipping,
    ratingsCount,
    stock,
    quantity,
  };
  const products = await createProductInDB(product);

  if (products) {
    return res.status(201).json({
      status: 201,
      success: true,
      message: "Product Created successfully",
    });
  }
  try {
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await findProduct("id", req.params.id);
    const findByCategory = await findProduct("category", product.category);
    const relatedProduct = findByCategory
      .filter((pd) => pd._id !== req.params.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    return res.status(200).json({
      status: 200,
      success: true,
      data: {
        product,
        relatedProduct,
      },
    });
  } catch (error) {
    next(error);
  }
};
