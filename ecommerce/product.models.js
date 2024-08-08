import mongoose from "mongoose";
const product_Schema = new mongoose.Schema(
  {
    product_description: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    productImage: {
      type: String,
    },
    productPrice: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Catogery",
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model("Product", product_Schema);
