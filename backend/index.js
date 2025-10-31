import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./db/connectDB.js"; // imported as connectDatabase
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import companyRoutes from "./routes/company.routes.js";
import jobRoutes from "./routes/job.routes.js";
import cors from "cors";

dotenv.config(); // Load environment variables
const app = express();
const PORT = process.env.PORT || 5004;

// Connect to database once
connectDatabase();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL, 
    credentials: true, // Allow cookies to be sent
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/jobs", jobRoutes);

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on port: ${PORT}`);
});
