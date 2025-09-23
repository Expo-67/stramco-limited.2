import Company from "../Models/company.js";

// ➕ Create company
export const createCompany = async (req, res) => {
  try {
    const { name, location, email, phoneNumber, logo } = req.body;

    if (!name || !location || !email || !phoneNumber) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const existingCompany = await Company.findOne({ email });
    if (existingCompany) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Company with this email already exists",
        });
    }

    const company = await Company.create({
      name,
      location,
      email,
      phoneNumber,
      logo,
    });
    res
      .status(201)
      .json({
        success: true,
        message: "Company created successfully✅",
        company,
      });
  } catch (error) {
    console.error("❌ Create Company Error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// 📖 Get all companies
export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json({ success: true, companies });
  } catch (error) {
    console.error("❌ Get Companies Error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// 📖 Get single company
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company)
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });
    res.json({ success: true, company });
  } catch (error) {
    console.error("❌ Get Company Error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✏️ Update company
export const updateCompany = async (req, res) => {
  try {
    const { name, location, email, phoneNumber, logo } = req.body;
    const company = await Company.findByIdAndUpdate(
      req.params.id,
      { name, location, email, phoneNumber, logo },
      { new: true, runValidators: true }
    );
    if (!company)
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });
    res.json({
      success: true,
      message: "Company updated successfully✅",
      company,
    });
  } catch (error) {
    console.error("❌ Update Company Error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// 🗑️ Delete company
export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company)
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });
    res.json({ success: true, message: "Company deleted successfully✅" });
  } catch (error) {
    console.error("❌ Delete Company Error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
