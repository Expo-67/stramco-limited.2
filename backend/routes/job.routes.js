import express from "express";
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../Controllers/jobController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

// CRUD routes
router.post("/", protect, createJob); // ➕ Create Job
router.get("/", getJobs); // 📋 Get All Jobs
router.get("/:id", getJobById); // 📌 Get Single Job
router.put("/:id", updateJob); // ✏️ Update Job
router.delete("/:id", deleteJob); // 🗑️ Delete Job

export default router;
