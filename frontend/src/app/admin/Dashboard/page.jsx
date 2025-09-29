"use client";
import { useEffect } from "react";
import { Building2, Briefcase, CheckCircle, User } from "lucide-react";
import useJobStore from "../../../../store/UseJobsStore.js";
import useCompanyStore from "../../../../store/useCompanyStore.js";

export default function DashboardPage() {
  const { jobs, fetchJobs } = useJobStore();
  const { companies, fetchCompanies } = useCompanyStore();

  useEffect(() => {
    fetchJobs();
    fetchCompanies();
  }, [fetchJobs, fetchCompanies]);

  // ✅ Stats
  const totalCompanies = companies.length;
  const openJobs = jobs.filter((job) => job.status === "Open").length;
  const closedJobs = jobs.filter((job) => job.status === "Closed").length;

  // ✅ Recent activity (latest 5 jobs & companies)
  const recentJobs = [...jobs]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);
  const recentCompanies = [...companies]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 2);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <Building2 size={30} className="text-gray-700" />
          <div>
            <p className="text-sm text-gray-500">Total Companies</p>
            <h3 className="text-2xl font-bold">{totalCompanies}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <Briefcase size={30} className="text-gray-700" />
          <div>
            <p className="text-sm text-gray-500">Open Jobs</p>
            <h3 className="text-2xl font-bold">{openJobs}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <CheckCircle size={30} className="text-gray-700" />
          <div>
            <p className="text-sm text-gray-500">Closed Jobs</p>
            <h3 className="text-2xl font-bold">{closedJobs}</h3>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          {recentJobs.map((job) => (
            <li
              key={job._id}
              className="flex items-center justify-between gap-4 p-2 rounded-lg hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-2">
                <Briefcase size={20} className="text-gray-700" />
                <span>New job posted: {job.title}</span>
              </div>
              <span className="text-gray-400 text-xs px-2 py-1 bg-gray-100 rounded-full">
                {new Date(job.createdAt).toLocaleDateString()}
              </span>
            </li>
          ))}

          {recentCompanies.map((company) => (
            <li
              key={company._id}
              className="flex items-center justify-between gap-4 p-2 rounded-lg hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-2">
                <Building2 size={20} className="text-gray-700" />
                <span>Company registered: {company.name}</span>
              </div>
              <span className="text-gray-400 text-xs px-2 py-1 bg-gray-100 rounded-full">
                {new Date(company.createdAt).toLocaleDateString()}
              </span>
            </li>
          ))}

          {recentJobs.length === 0 && recentCompanies.length === 0 && (
            <li className="text-gray-500">No recent activity available.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
