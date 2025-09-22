import jwt from "jsonwebtoken";
import User from "../Models/user.js";

export const protect = async (req, res, next) => {
  try {
    // 1. Get token from cookies
    const token = req.cookies.user;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized, no token" });
    }

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Attach user to req (without password)
    req.user = await User.findById(decoded.userId).select("-password");

    if (!req.user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    next();
  } catch (error) {
    console.error("❌ Auth Middleware Error:", error.message);
    res.status(401).json({ success: false, message: "Not authorized" });
  }
};
