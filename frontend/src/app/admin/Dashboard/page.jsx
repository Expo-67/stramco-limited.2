"use client";
import { useState } from "react";
import Link from "next/link"; // ✅ Correct import for links
import Image from "next/image";
import {
  Building2,
  Briefcase,
  User,
  Bell,
  Menu,
  CheckCircle,
} from "lucide-react";
import logo from "../../images/logo-black.png";
import profile from "../../images/profilepic.png";

export default function Dashboard() {
  const [user] = useState("James Otieno"); // replace with logged in user

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r">
        <div className="flex  items-center justify-center h-24 border-b px-4 gap-3">
          <Image
            src={logo}
            alt="Stramco Logo"
            width={80}
            height={40}
            priority
          />
          <h1 className="text-xl font-bold text-gray-900 ">Stramco</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2 text-gray-700 font-medium">
          <Link
            href="#"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Building2 size={20} /> <span>Companies</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Briefcase size={20} /> <span>Jobs</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <User size={20} /> <span>Profile</span>
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white border-b px-6 py-4">
          <div className="flex items-center gap-3">
            <Menu className="md:hidden" />
            <h2 className="text-lg font-semibold">
              Welcome, <span className="text-gray-900">{user}</span>
            </h2>
          </div>

          {/* Profile picture + bell */}
          <div className="flex items-center gap-4">
            <Bell className="text-gray-500 cursor-pointer" />
            <Image
              src={profile}
              alt="Profile Picture"
              width={36}
              height={36}
              className="rounded-full border"
            />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 space-y-6">
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
        </main>
      </div>
    </div>
  );
}
