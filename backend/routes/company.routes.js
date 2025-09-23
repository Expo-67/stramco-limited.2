import express from "express";
import {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "../Controllers/companyController.js";

const router = express.Router();

router.post("/", createCompany); // ➕ Create
router.get("/", getCompanies); // 📖 Get all
router.get("/:id", getCompanyById); // 📖 Get one
router.put("/:id", updateCompany); // ✏️ Update
router.delete("/:id", deleteCompany); // 🗑️ Delete

export default router;
