import { create } from "zustand";
import axios from "axios";

// ✅ Base URL for backend
const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const useJobStore = create((set) => ({
  jobs: [],
  loading: false,
  error: null,

  // 📋 Get all jobs
  fetchJobs: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${backendURL}/api/jobs`, {
        withCredentials: true,
      });
      set({ jobs: res.data.jobs, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.message || err.message,
        loading: false,
      });
    }
  },

  // ➕ Add new job
  addJob: async (jobData) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`${backendURL}/api/jobs`, jobData, {
        withCredentials: true,
      });
      set((state) => ({
        jobs: [...state.jobs, res.data.job],
        loading: false,
      }));
    } catch (err) {
      set({
        error: err.response?.data?.message || err.message,
        loading: false,
      });
    }
  },

  // ✏️ Update job
  updateJob: async (id, updatedData) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.put(
        `${backendURL}/api/jobs/${id}`,
        updatedData,
        { withCredentials: true }
      );
      set((state) => ({
        jobs: state.jobs.map((job) =>
          job._id === id ? res.data.job : job
        ),
        loading: false,
      }));
    } catch (err) {
      set({
        error: err.response?.data?.message || err.message,
        loading: false,
      });
    }
  },

  // 🗑️ Delete job
  deleteJob: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${backendURL}/api/jobs/${id}`, {
        withCredentials: true,
      });
      set((state) => ({
        jobs: state.jobs.filter((job) => job._id !== id),
        loading: false,
      }));
    } catch (err) {
      set({
        error: err.response?.data?.message || err.message,
        loading: false,
      });
    }
  },
}));

export default useJobStore;
