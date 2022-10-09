import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "./routes/productsRoutes.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// ALL ROUTES

app.use("/api/v1/products", productRouter);
app.use((error, req, res, next) => {
  const message = error.message;
  const status = error.status;
  return res.status(status).json({ message });
});

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB, () => {
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(`Database Connected`);
  }
});

app.listen(PORT, () => {
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(`App is running on port ${PORT}`);
  }
});
