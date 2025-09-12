"use client";
import { Building2, Briefcase, CheckCircle, User } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <Building2 size={30} className="text-gray-700" />
          <div>
            <p className="text-sm text-gray-500">Total Companies</p>
            <h3 className="text-2xl font-bold">120</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <Briefcase size={30} className="text-gray-700" />
          <div>
            <p className="text-sm text-gray-500">Open Jobs</p>
            <h3 className="text-2xl font-bold">45</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <CheckCircle size={30} className="text-gray-700" />
          <div>
            <p className="text-sm text-gray-500">Closed Jobs</p>
            <h3 className="text-2xl font-bold">75</h3>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          <li className="flex items-center justify-between gap-4 p-2 rounded-lg hover:bg-gray-50 transition">
            <div className="flex items-center gap-2">
              <Briefcase size={20} className="text-gray-700" />
              <span>New job posted: Frontend Developer</span>
            </div>
            <span className="text-gray-400 text-xs px-2 py-1 bg-gray-100 rounded-full">
              2h ago
            </span>
          </li>

          <li className="flex items-center justify-between gap-4 p-2 rounded-lg hover:bg-gray-50 transition">
            <div className="flex items-center gap-2">
              <Building2 size={20} className="text-gray-700" />
              <span>Company registered: TechCorp Ltd.</span>
            </div>
            <span className="text-gray-400 text-xs px-2 py-1 bg-gray-100 rounded-full">
              5h ago
            </span>
          </li>

          <li className="flex items-center justify-between gap-4 p-2 rounded-lg hover:bg-gray-50 transition">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-gray-700" />
              <span>Job closed: HR Manager</span>
            </div>
            <span className="text-gray-400 text-xs px-2 py-1 bg-gray-100 rounded-full">
              1d ago
            </span>
          </li>

          <li className="flex items-center justify-between gap-4 p-2 rounded-lg hover:bg-gray-50 transition">
            <div className="flex items-center gap-2">
              <User size={20} className="text-gray-700" />
              <span>User updated profile</span>
            </div>
            <span className="text-gray-400 text-xs px-2 py-1 bg-gray-100 rounded-full">
              2d ago
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
