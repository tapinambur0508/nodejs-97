import express from "express";

import UserController from "../controllers/user.js";

import authMiddleware from "../middlewares/auth.js";
import uploadMiddleware from "../middlewares/upload.js";

const router = express.Router();

router.patch(
  "/avatar",
  authMiddleware,
  uploadMiddleware.single("avatar"),
  UserController.changeAvatar,
);

router.get("/verify/:token", UserController.verifyEmail);

export default router;
