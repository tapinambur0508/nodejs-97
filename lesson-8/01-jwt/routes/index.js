import express from "express";

import authRoutes from "./auth.js";
import bookRoutes from "./books.js";

import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/books", authMiddleware, bookRoutes);

export default router;
