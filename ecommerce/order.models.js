import mongoose from "mongoose";
const orderItmeSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const productOrder_Schema = new mongoose.Schema(
  {
    orderImage: {
      type: String,
    },
    orderPrice: {
      type: Number,
      default: 0,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItme: {
      type: [orderItmeSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default:"PENDING"
    },
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", productOrder_Schema);
