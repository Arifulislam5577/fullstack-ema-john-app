import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductModel from "../model/productModel.js";
import { products } from "../utils/products.js";
dotenv.config();

mongoose.connect(process.env.MONGODB, () => {
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(`Database Connected`);
  }
});

const seedProducts = async () => {
  try {
    await ProductModel.deleteMany();
    console.log("Product deleted");
    await ProductModel.insertMany(products);
    console.log("Product added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedProducts();
