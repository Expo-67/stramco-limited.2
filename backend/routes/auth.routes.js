import express from "express";
import {
  signup,
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
} from "../Controllers/authController.js";
import { protect } from "../Middleware/authMiddleware.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/me", protect, getMe); //protected route

export default router;
