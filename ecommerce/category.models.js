import mongoose from "mongoose";
const category_Schema = mongoose.Schema({
    name :{
        type : String,
        required:true,
        unique :true,
    }
}, { timestamps: true });
export const Category = mongoose.model("Category", category_Schema);
