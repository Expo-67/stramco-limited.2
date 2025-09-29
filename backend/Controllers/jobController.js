import Job from "../Models/job.js";
import Company from "../Models/company.js";

// ➕ Create Job
export const createJob = async (req, res) => {
  try {
    const {
      company,
      title,
      description,
      responsibilities,
      requirements,
      salary,
      location,
      deadline,
      applicationChannel,
      status, 
    } = req.body;

    // Ensure company exists
    const existingCompany = await Company.findById(company);
    if (!existingCompany) {
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });
    }

    const job = await Job.create({
      company,
      title,
      description,
      responsibilities,
      requirements,
      salary,
      location,
      deadline,
      applicationChannel,
      status: status || "Open",
    });

    res.status(201).json({
      success: true,
      message: "Job created successfully✅",
      job,
    });
  } catch (error) {
    console.error("❌ Job create error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// 📋 Get all Jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("company", "name email location");
    res.status(200).json({ success: true, jobs });
  } catch (error) {
    console.error("❌ Get jobs error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// 📌 Get single Job
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate(
      "company",
      "name email location"
    );
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({ success: true, job });
  } catch (error) {
    console.error("❌ Get job error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✏️ Update Job
export const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({
      success: true,
      message: "Job updated successfully✅",
      job,
    });
  } catch (error) {
    console.error("❌ Update job error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// 🗑️ Delete Job
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({
      success: true,
      message: "Job deleted successfully✅",
    });
  } catch (error) {
    console.error("❌ Delete job error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
