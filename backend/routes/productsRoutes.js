import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
} from "../controllers/productControllers.js";
const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProductById);

export default router;
