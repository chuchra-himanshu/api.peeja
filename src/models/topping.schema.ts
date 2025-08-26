import mongoose, { type Schema } from "mongoose";

const toppingSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    prices: [
      {
        sizeId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Size",
          required: true,
        },
        price: {
          type: String,
          required: true,
        },
      },
    ],
    isAvailable: {
      type: Boolean,
      required: true,
      default: true,
    },
    category: {
      type: String,
      enum: ["VEG", "NON-VEG", "VEGAN"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Topping = mongoose.model("Topping", toppingSchema);
export default Topping;
