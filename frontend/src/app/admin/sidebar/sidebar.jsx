"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Briefcase,
  User,
  Bell,
  Menu,
  X,
  HomeIcon,
  DoorClosed,
} from "lucide-react";
import logo from "../../images/logo-black.png";
import profile from "../../images/profilepic.png";

export default function SidebarLayout({ children }) {
  const [user] = useState("Jackson");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 bg-white shadow-md border-r">
        <div className="flex items-center justify-center h-20 border-b px-4 gap-3">
          <Image
            src={logo}
            alt="Stramco Logo"
            width={50}
            height={28}
            priority
          />
          <h1 className="text-xl font-bold text-gray-900">Stramco</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2 text-gray-700 font-medium">
          <Link
            href="/admin/Dashboard"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <HomeIcon size={20} /> Dashboard
          </Link>
          <Link
            href="/admin/Companies"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Building2 size={20} /> Companies
          </Link>
          <Link
            href="/admin/Jobs"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Briefcase size={20} /> Jobs
          </Link>
          <Link
            href="/admin/Profile"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <User size={20} /> Profile
          </Link>
          <Link
            href="/admin/Login"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <DoorClosed size={20} /> Logout
          </Link>
        </nav>
      </aside>

      {/* Sidebar (Mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-10 flex md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0  bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Card-style Sidebar */}
          <aside className="relative z-50 w-72 bg-white rounded-r-2xl shadow-xl p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt="Stramco Logo"
                  width={40}
                  height={22}
                  priority
                />
                <h1 className="text-lg font-bold text-gray-900">Stramco</h1>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav */}
            <nav className="space-y-3 font-medium text-gray-700">
              <Link
                href="/admin/Dashboard"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <HomeIcon size={20} /> Dashboard
              </Link>
              <Link
                href="/admin/Companies"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <Building2 size={20} /> Companies
              </Link>
              <Link
                href="/admin/Jobs"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <Briefcase size={20} /> Jobs
              </Link>
              <Link
                href="/admin/Profile"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <User size={20} /> Profile
              </Link>
              <Link
                href="/admin/Login"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <DoorClosed size={20} /> Logout
              </Link>
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white border-b px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-gray-700 hover:text-gray-900"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold">
              Welcome, <span className="text-gray-900">{user}</span>
            </h2>
          </div>

          {/* Profile + Notifications */}
          <div className="flex items-center gap-4">
            <Bell className="text-gray-500 cursor-pointer" />
            <Image
              src={profile}
              alt="Profile Picture"
              width={44}
              height={44}
              className="rounded-full border"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 space-y-6">{children}</main>
      </div>
    </div>
  );
}
