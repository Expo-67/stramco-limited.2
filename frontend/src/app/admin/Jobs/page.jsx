"use client";

import { useState } from "react";
import { Briefcase, Edit, Trash, Plus } from "lucide-react";

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Ltd.",
    location: "Nairobi, Kenya",
    status: "Open",
    datePosted: "2025-09-05",
  },
  {
    id: 2,
    title: "HR Manager",
    company: "Green Energy Co.",
    location: "Mombasa, Kenya",
    status: "Closed",
    datePosted: "2025-09-01",
  },
];

export default function JobsPage() {
  const [jobs, setJobs] = useState(mockJobs);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Delete
  const handleDelete = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  // Add
  const handleAddJob = (newJob) => {
    setJobs([...jobs, { ...newJob, id: Date.now() }]);
    setIsAddOpen(false);
  };

  // Edit
  const handleEditJob = (updatedJob) => {
    setJobs(jobs.map((j) => (j.id === updatedJob.id ? updatedJob : j)));
    setIsEditOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Briefcase size={22} className="text-gray-700" /> Jobs
        </h2>
        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus size={18} /> Add Job
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Job Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Location
              </th>
              <th className="px-6 py-3text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Date Posted
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">{job.title}</td>
                <td className="px-6 py-4">{job.company}</td>
                <td className="px-6 py-4">{job.location}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      job.status === "Open"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4">{job.datePosted}</td>
                <td className="px-6 py-4 flex gap-3">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      setSelectedJob(job);
                      setIsEditOpen(true);
                    }}
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(job.id)}
                  >
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {isAddOpen && (
        <Modal title="Add New Job" onClose={() => setIsAddOpen(false)}>
          <p> Create a new Job for company </p>
          <JobForm onSave={handleAddJob} />
        </Modal>
      )}

      {/* Edit Modal */}
      {isEditOpen && selectedJob && (
        <Modal title="Edit Job" onClose={() => setIsEditOpen(false)}>
          <JobForm job={selectedJob} onSave={handleEditJob} />
        </Modal>
      )}
    </div>
  );
}

/* 🔹 Reusable Modal */
function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

/* 🔹 Job Form */
function JobForm({ job = {}, onSave }) {
  const [form, setForm] = useState({
    id: job.id || null,
    title: job.title || "",
    company: job.company || "",
    location: job.location || "",
    status: job.status || "Open",
    datePosted: job.datePosted || new Date().toISOString().slice(0, 10),
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSave(form);
      }}
    >
      <input
        type="text"
        name="Company"
        placeholder="Select a company"
        value={form.company}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="title"
        placeholder="Job Description"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="title"
        placeholder="List the required requirements"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="title"
        placeholder="Job Salary"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="title"
        placeholder="Application channel"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="Open">Open</option>
        <option value="Closed">Closed</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
}
