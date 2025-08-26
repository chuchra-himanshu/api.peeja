import mongoose, { type Schema } from "mongoose";

const sizeSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      trim: true,
      required: true,
      uppercase: true,
      unique: true,
    },
    diameter: {
      type: String,
      required: true,
    },
    slices: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Size = mongoose.model("Size", sizeSchema);
export default Size;
