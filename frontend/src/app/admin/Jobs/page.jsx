"use client";

import { useEffect, useState } from "react";
import { Briefcase, Edit, Trash, Plus } from "lucide-react";
import useJobStore from "../../../../store/UseJobsStore.js"; // store for jobs
import useCompanyStore from "../../../../store/useCompanyStore.js"; // 🔹 new: store for companies

export default function JobsPage() {
  const { jobs, fetchJobs, addJob, updateJob, deleteJob, loading, error } = useJobStore();
  const { companies, fetchCompanies } = useCompanyStore();

  // Helper function to get company name by ID
  const getCompanyName = (companyIdOrObject) => {
    if (typeof companyIdOrObject === 'object' && companyIdOrObject?.name) {
      return companyIdOrObject.name;
    }
    if (typeof companyIdOrObject === 'string') {
      const company = companies.find(c => c._id === companyIdOrObject);
      return company?.name || companyIdOrObject;
    }
    return 'N/A';
  };

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Fetch jobs & companies on mount
  useEffect(() => {
    fetchJobs();
    fetchCompanies();
  }, [fetchJobs, fetchCompanies]);

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

      {/* Error / Loading */}
      {loading && <p className="text-gray-500">Loading jobs...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Job Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Salary</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deadline</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">{job.title}</td>
                <td className="px-6 py-4">{getCompanyName(job.company)}</td>
                <td className="px-6 py-4">{job.location}</td>
                <td className="px-6 py-4">{job.salary}</td>
                <td className="px-6 py-4">{new Date(job.deadline).toLocaleDateString()}</td>
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
                    onClick={() => deleteJob(job._id)}
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
          <JobForm
            companies={companies}
            onSave={async (job) => {
              await addJob(job);
              setIsAddOpen(false);
            }}
          />
        </Modal>
      )}

      {/* Edit Modal */}
      {isEditOpen && selectedJob && (
        <Modal title="Edit Job" onClose={() => setIsEditOpen(false)}>
          <JobForm
            job={selectedJob}
            companies={companies}
            onSave={async (updated) => {
              await updateJob(selectedJob._id, updated);
              setIsEditOpen(false);
            }}
          />
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
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✖</button>
        </div>
        {children}
      </div>
    </div>
  );
}

/* 🔹 Job Form */
function JobForm({ job = {}, companies = [], onSave }) {
  const [form, setForm] = useState({
    company: job.company?._id || job.company || "",
    title: job.title || "",
    description: job.description || "",
    responsibilities: job.responsibilities || "",
    requirements: job.requirements || "",
    salary: job.salary || "",
    location: job.location || "",
    deadline: job.deadline ? job.deadline.slice(0, 10) : "",
    applicationChannel: job.applicationChannel || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      className="space-y-4 max-h-96 overflow-y-auto"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!form.company || !form.title) {
          alert('Please fill in required fields (Company and Job Title)');
          return;
        }
        setIsSubmitting(true);
        try {
          await onSave(form);
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      {/* Company Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company <span className="text-red-500">*</span>
        </label>
        <select
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Select a Company</option>
          {companies.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
        <textarea
          name="description"
          placeholder="Job Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={3}
        />
      </div>

      <textarea
        name="responsibilities"
        placeholder="Responsibilities"
        value={form.responsibilities}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        rows={3}
      />

      <textarea
        name="requirements"
        placeholder="Requirements"
        value={form.requirements}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        rows={3}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
        <input
          type="text"
          name="salary"
          placeholder="Input the salary here for the job Kshs"
          value={form.salary}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <input
          type="text"
          name="location"
          placeholder="e.g. Nairobi, Kenya"
          value={form.location}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <input
        type="text"
        name="applicationChannel"
        placeholder="Application Channel (e.g. careers@company.com)"
        value={form.applicationChannel}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition"
        >
          {isSubmitting ? "Saving Job..." : job._id ? "Update Job" : "Create Job"}
        </button>
      </div>
    </form>
  );
}
