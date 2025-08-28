import mongoose, { type Schema } from "mongoose";

const crustSchema: Schema = new mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

const Crust = mongoose.model("Curst", crustSchema);
export default Crust;
