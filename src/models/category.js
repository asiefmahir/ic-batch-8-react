import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 1,
      maxLength: 20,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true }
);

categorySchema.plugin(uniqueValidator, " is already taken.");

export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);
