import ProductModel from "../model/productModel.js";
import {
  bestSellerProduct,
  createProductInDB,
  findProduct,
} from "../services/productService.js";
import { sliderItems } from "../services/sliderItems.js";
import ApiFeatures from "../utils/apiFeature.js";
import { error } from "../utils/error.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const productsArr = await ProductModel.find();
    const productPerPage = 12;
    const bestSeller = await bestSellerProduct([...productsArr]);
    const categories = await ProductModel.distinct("category");
    const sliderProducts = await sliderItems(categories);
    const totalProducts = await ProductModel.countDocuments();
    const ApiFeature = new ApiFeatures(ProductModel.find(), req.query)
      .search()
      .filter()
      .paginate(productPerPage);

    const products = await ApiFeature.query;

    return res.status(200).json({
      status: 200,
      success: true,
      length: products.length,
      data: {
        products,
        totalProducts,
      },
    });
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
