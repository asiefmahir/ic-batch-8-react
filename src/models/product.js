import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      minLength: 1,
      maxLength: 160,
      text: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
      maxLength: 1000000,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxLength: 6,
      validate: {
        validator: function (value) {
          return value !== 0;
        },
        message: "Price must be greater than 0",
      },
    },
    image: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

productSchema.plugin(uniqueValidator, { message: " already exists" });

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
