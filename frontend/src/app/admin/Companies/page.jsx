"use client";

import { useEffect, useState } from "react";
import { Building2, Edit, Trash, Plus } from "lucide-react";
import useCompanyStore from "../../../../store/useCompanyStore.js"; // ✅ Import Zustand store

export default function CompaniesPage() {
  const {
    companies,
    fetchCompanies,
    createCompany,
    updateCompany,
    deleteCompany,
    loading,
    error,
  } = useCompanyStore();

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Fetch companies on mount
  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  // Delete
  const handleDelete = (id) => {
    deleteCompany(id);
  };

  // Add
  const handleAddCompany = (newCompany) => {
    createCompany(
      newCompany.name,
      newCompany.location,
      newCompany.email,
      newCompany.phoneNumber,
      newCompany.logo
    );
    setIsAddOpen(false);
  };

  // Edit
  const handleEditCompany = (updatedCompany) => {
    updateCompany(updatedCompany._id, updatedCompany);
    setIsEditOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Building2 size={22} className="text-gray-700" /> Companies
        </h2>
        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus size={18} /> Add Company
        </button>
      </div>

      {/* Error & Loading */}
      {loading && <p className="text-gray-500">Loading companies...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Company Name
              </th>
              <th className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase">
                Location
              </th>
              <th className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companies.map((company) => (
              <tr key={company._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">{company.name}</td>
                <td className="px-6 py-4">{company.location}</td>
                <td className="px-6 py-4">{company.email}</td>
                <td className="px-6 py-4">{company.phoneNumber}</td>
                <td className="px-6 py-4 flex gap-3">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      setSelectedCompany(company);
                      setIsEditOpen(true);
                    }}
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(company._id)}
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
        <Modal title="Add New Company" onClose={() => setIsAddOpen(false)}>
          <CompanyForm onSave={handleAddCompany} />
        </Modal>
      )}

      {/* Edit Modal */}
      {isEditOpen && selectedCompany && (
        <Modal title="Edit Company" onClose={() => setIsEditOpen(false)}>
          <CompanyForm company={selectedCompany} onSave={handleEditCompany} />
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

/* 🔹 Company Form */
function CompanyForm({ company = {}, onSave }) {
  const [form, setForm] = useState({
    _id: company._id || null,
    name: company.name || "",
    location: company.location || "",
    email: company.email || "",
    phoneNumber: company.phoneNumber || "",
    logo: company.logo || "",
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
        name="name"
        placeholder="Enter company name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="location"
        placeholder="e.g Westlands, Nairobi"
        value={form.location}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Company email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone number"
        value={form.phoneNumber}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="logo"
        placeholder="Logo URL (optional)"
        value={form.logo}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Save Company
      </button>
    </form>
  );
}
