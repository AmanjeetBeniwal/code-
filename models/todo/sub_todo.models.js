import mongoose from "mongoose";
const sub_TodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timetamps: true }
);
export const SubTodo = mongoose.model("SubTodo", sub_TodoSchema);
