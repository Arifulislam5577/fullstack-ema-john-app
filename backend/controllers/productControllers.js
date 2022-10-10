import ProductModel from "../model/productModel.js";
import { sliderItems } from "../services/sliderItems.js";
import { error } from "../utils/error.js";

/**
 * 
[
[0]   'Bag',
[0]   'Bottle',
[0]   'Cap',
[0]   'Earphones',
[0]   "Men's Boot",
[0]   "Men's Pants",
[0]   "Men's Sneaker"
[0] ]
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

  const product = new ProductModel({
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
  });
  await product.save();
  try {
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) {
      throw error("Product not found", 400);
    }

    const findByCategory = await ProductModel.find({
      category: product.category,
    });

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
