import mongoose from "mongoose";
const { model, Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  img: { type: String, required: true },
  seller: { type: String, required: true },
  price: { type: Number, required: true },
  ratings: { type: Number },
  shipping: { type: Number },
  ratingsCount: { type: Number },
  stock: { type: Number },
  quantity: { type: Number },
});

const ProductModel = model("products", productSchema);

export default ProductModel;
