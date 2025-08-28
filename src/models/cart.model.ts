import mongoose, { type Schema } from "mongoose";

const itemSchema: Schema = new mongoose.Schema({
  pizza: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pizza",
    required: true,
  },
  size: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Size",
    required: true,
  },
  crust: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Crust",
    required: true,
  },
  toppings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topping",
      required: true,
    },
  ],
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const cartSchema: Schema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
      unique: true,
    },
    items: [itemSchema],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);
