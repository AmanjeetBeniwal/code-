import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    mobileNumber: {
      type: Number,
      unique: true,
    },
    password: {
      type: Number,
      unique: true,
      required: true,
    },
    confirmPassword: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", UserSchema);
