import bcrypt from "bcrypt";
import User from "../Models/user.js";
import dotenv from "dotenv";
import crypto from "crypto";
import { setUserCookie } from "../Utils/generateTokenAndSetCookie.js";
import { sendEmail } from "../Utils/sendEmail.js";

dotenv.config();

// Signup controller ✅
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Validate input
    if (!fullname || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    // 5. Generate cookie (could be JWT or userId) and attach to response
    setUserCookie(res, user._id.toString());

    // Remove password before sending response
    const userSafe = {
      id: user._id,
      fullname: user.fullname,
      email: user.email,
    };

    // 7. Send success response
    res.status(201).json({
      success: true,
      message: "User registered successfully✅",
      user: userSafe,
    });
  } catch (error) {
    console.error("❌ Signup error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

// Login controller ✏️
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }

    // 2. Check if user exists
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    // 4. Set cookie (JWT inside)
    setUserCookie(res, user._id.toString());

    // 5. Prepare safe user object
    const userSafe = {
      id: user._id,
      fullname: user.fullname,
      email: user.email,
    };

    // 6. Send response
    res.status(200).json({
      success: true,
      message: "Login successful ✅",
      user: userSafe,
    });
  } catch (error) {
    console.error("❌ Login error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

// Logout controller 🚪
export const logout = (req, res) => {
  try {
    res.clearCookie("user", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      message: "User logged out successfully ✅",
    });
  } catch (error) {
    console.error("❌ Logout error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

// Get logged-in user 👍
export const getMe = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user, // Comes from middleware
    });
  } catch (error) {
    console.error("❌ getMe error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Forgot Password 🔒
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // Hash and save token in DB
    user.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    user.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 minutes
    await user.save();

    // Build reset URL
    const resetUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/auth/reset-password/${resetToken}`;

    // Instead of sending email → return link in response
    res.status(200).json({
      success: true,
      message: "Password reset link generated✅ (testing only)",
      resetUrl,
    });
  } catch (error) {
    console.error("❌ Forgot password error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//Reset password controller 🔑
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "Password is required" });
    }

    // Hash token to compare with DB
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired token" });
    }

    // Hash new password
    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res
      .status(200)
      .json({ success: true, message: "Password reset successful✅" });
  } catch (error) {
    console.error("❌ Reset password error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
// Update Profile 📝
export const updateUser = async (req, res) => {
  try {
    const userId = req.user._id; // from protect middleware
    const { fullname, email, role, password } = req.body;

    const user = await User.findById(userId).select("+password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Update fields if provided
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (role) user.role = role;

    // If password change requested
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    await user.save();

    // Prepare safe response (no password)
    const userSafe = {
      id: user._id,
      fullname: user.fullname,
      email: user.email,
      role: user.role || null,
    };

    res.status(200).json({
      success: true,
      message: "Profile updated successfully ✅",
      user: userSafe,
    });
  } catch (error) {
    console.error("❌ Update user error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

