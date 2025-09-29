import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company", //reference to Company model
      required: true,
    },
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
    },
    responsibilities: {
      type: String,
      required: [true, "Job responsibilities are required"],
    },
    requirements: {
      type: String,
      required: [true, "Job requirements are required"],
    },
    salary: {
      type: String,
      default: "Not Disclosed",
    },
    location: {
      type: String,
      required: [true, "Job location is required"],
    },
    deadline: {
      type: Date,
      required: [true, "Application deadline is required"],
    },
    applicationChannel: {
      type: String,
      required: [true, "Application channel is required"],
    },
    status: {
  type: String,
  enum: ["Open", "Closed"],
  default: "Open",
},
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
