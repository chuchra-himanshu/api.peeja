import express, { type Router } from "express";
import apiRouter from "./api/index.routes.js";

const router: Router = express.Router();

router.use("/api", apiRouter);

export default router;
