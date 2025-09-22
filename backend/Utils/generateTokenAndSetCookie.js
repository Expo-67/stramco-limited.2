import jwt from "jsonwebtoken";

export const setUserCookie = (res, userId) => {
  // 1. Create JWT with userId payload
  const token = jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: "7d" } // token valid for 7 days
  );

  // 2. Set JWT in cookie
  res.cookie("user", token, {
    httpOnly: true, // prevent JS access
    secure: process.env.NODE_ENV === "production", // HTTPS only in prod
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
  });
};
