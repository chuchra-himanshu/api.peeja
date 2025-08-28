import express, { type Router } from "express";
import customerRouter from "./customer.routes.js";
import pizzaRouter from "./pizza.routes.js";
import sizeRouter from "./size.routes.js";
import toppingRouter from "./topping.routes.js";
import crustRouter from "./crust.routes.js";
import cartRouter from "./cart.routes.js";
import orderRouter from "./order.routes.js";

const router: Router = express.Router();

router.use("/customers", customerRouter);
router.use("/pizzas", pizzaRouter);
router.use("/sizes", sizeRouter);
router.use("/toppings", toppingRouter);
router.use("/crusts", crustRouter);
router.use("/cart", cartRouter);
router.use("/orders", orderRouter);

export default router;
