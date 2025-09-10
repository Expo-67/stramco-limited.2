"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, Briefcase, Edit, Trash, Plus, Menu } from "lucide-react";
import logo from "../../images/logo-black.png";

// Mock data for companies
const mockCompanies = [
  {
    id: 1,
    name: "TechCorp Ltd.",
    industry: "IT & Software",
    location: "Nairobi, Kenya",
    dateAdded: "2025-09-10",
    jobs: 12,
  },
  {
    id: 2,
    name: "Green Energy Co.",
    industry: "Energy",
    location: "Mombasa, Kenya",
    dateAdded: "2025-09-08",
    jobs: 5,
  },
  {
    id: 3,
    name: "Finance Solutions",
    industry: "Finance",
    location: "Kisumu, Kenya",
    dateAdded: "2025-09-05",
    jobs: 8,
  },
];

export default function CompaniesPage() {
  const [companies, setCompanies] = useState(mockCompanies);

  const handleDelete = (id) => {
    setCompanies(companies.filter((company) => company.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r">
        <div className="flex items-center justify-start h-24 border-b px-4 gap-3">
          <Image
            src={logo}
            alt="Stramco Logo"
            width={80}
            height={40}
            priority
          />
          <h1 className="text-xl font-bold text-gray-900">Stramco</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2 text-gray-700 font-medium">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Building2 size={20} /> <span>Companies</span>
          </Link>
          <Link
            href="/admin/Companies"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Briefcase size={20} /> <span>Jobs</span>
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Edit size={20} /> <span>Profile</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white border-b px-6 py-4">
          <div className="flex items-center gap-3">
            <Menu className="md:hidden" />
            <h2 className="text-lg font-semibold">Companies</h2>
          </div>
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
            <Plus size={16} /> Add Company
          </button>
        </header>

        {/* Table */}
        <main className="flex-1 p-6">
          <div className="overflow-x-auto bg-white rounded-2xl shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Industry
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Added
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Jobs
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {companies.map((company) => (
                  <tr key={company.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {company.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {company.industry}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {company.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {company.dateAdded}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {company.jobs}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit size={18} />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(company.id)}
                      >
                        <Trash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
