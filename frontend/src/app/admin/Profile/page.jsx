"use client";

import { useState } from "react";
import { Edit } from "lucide-react";
import Image from "next/image";
import profilePic from "../../images/profilepic.png";
import useAuthStore from "../../../../store/useAuthStore.js"; // ⬅️ import Zustand store

export default function ProfilePage() {
  const { user, updateProfile, loading, error } = useAuthStore();
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleSave = async (updatedUser) => {
    const success = await updateProfile(updatedUser);
    if (success) {
      setIsEditOpen(false);
    } else {
      alert("❌ Failed to update profile: " + error);
    }
  };

  if (!user) {
    return <p className="p-6 text-gray-600">Loading profile...</p>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow">
        <Image
          src={profilePic}
          alt="Profile Picture"
          width={80}
          height={80}
          className="rounded-full border"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold">{user.fullname}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500">{user.role}</p>
        </div>
        <button
          onClick={() => setIsEditOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Edit size={18} /> Edit Profile
        </button>
      </div>

      {isEditOpen && (
        <Modal title="Edit Profile" onClose={() => setIsEditOpen(false)}>
          <ProfileForm user={user} onSave={handleSave} loading={loading} />
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

/* 🔹 Profile Form */
function ProfileForm({ user, onSave, loading }) {
  const [form, setForm] = useState({
    fullname: user.fullname || "",
    email: user.email || "",
    role: user.role || "",
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
        name="fullname"
        placeholder="Full Name"
        value={form.fullname}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={form.role}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
