import mongoose, { type Schema } from "mongoose";

const pizzaSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    image: {
      url: {
        type: String,
        trim: true,
        required: true,
      },
      token: {
        type: String,
        required: true,
      },
    },
    sizes: [
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
    description: {
      type: String,
      required: true,
    },
    crust: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Crust",
      required: true,
    },
    toppings: [
      {
        toppingId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Topping",
          required: true,
        },
        optional: {
          type: Boolean,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      enum: ["VEG", "NON-VEG", "VEGAN"],
      required: true,
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: true,
    },
    maxOrderQuantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Pizza = mongoose.model("Pizza", pizzaSchema);
export default Pizza;
