import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    MobileNumber: {
      type: Number,
      unique: true,
    },
    Password: {
      type: Number,
      unique: [true, " password must contain at least  eight characters"],
    },
    confirmPassword: {
      matchPassword: [true, "same pasword is required"],
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
