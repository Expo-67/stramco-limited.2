import express from "express";
import {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "../Controllers/companyController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createCompany); // ➕ Create
router.get("/", getCompanies); // 📖 Get all
router.get("/:id", getCompanyById); // 📖 Get one
router.put("/:id", updateCompany); // ✏️ Update
router.delete("/:id", deleteCompany); // 🗑️ Delete

export default router;
