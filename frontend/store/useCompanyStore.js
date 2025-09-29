import { create } from "zustand";
import axios from "axios";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const useCompanyStore = create((set, get) => ({
  companies: [],
  company: null,
  loading: false,
  error: null,

  // ➕ Create company
  createCompany: async (name, location, email, phoneNumber, logo) => {
    try {
      set({ loading: true, error: null });
      const { data } = await axios.post(
        `${backendURL}/api/companies`,
        { name, location, email, phoneNumber, logo },
        { withCredentials: true }
      );

      set((state) => ({
        companies: [...state.companies, data.company],
        loading: false,
      }));
      return data.company;
    } catch (err) {
      set({
        error: err.response?.data?.message || "Failed to create company",
        loading: false,
      });
    }
  },

  // 📖 Get all companies
  fetchCompanies: async () => {
    try {
      set({ loading: true, error: null });
      const { data } = await axios.get(`${backendURL}/api/companies`, {
        withCredentials: true,
      });
      set({ companies: data.companies, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.message || "Failed to fetch companies",
        loading: false,
      });
    }
  },

  // 📖 Get single company
  fetchCompanyById: async (id) => {
    try {
      set({ loading: true, error: null });
      const { data } = await axios.get(`${backendURL}/api/companies/${id}`, {
        withCredentials: true,
      });
      set({ company: data.company, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.message || "Failed to fetch company",
        loading: false,
      });
    }
  },

  // ✏️ Update company
  updateCompany: async (id, updates) => {
    try {
      set({ loading: true, error: null });
      const { data } = await axios.put(
        `${backendURL}/api/companies/${id}`,
        updates,
        { withCredentials: true }
      );

      set((state) => ({
        companies: state.companies.map((c) =>
          c._id === id ? data.company : c
        ),
        company: data.company,
        loading: false,
      }));

      return data.company;
    } catch (err) {
      set({
        error: err.response?.data?.message || "Failed to update company",
        loading: false,
      });
    }
  },

  // 🗑️ Delete company
  deleteCompany: async (id) => {
    try {
      set({ loading: true, error: null });
      await axios.delete(`${backendURL}/api/companies/${id}`, {
        withCredentials: true,
      });

      set((state) => ({
        companies: state.companies.filter((c) => c._id !== id),
        loading: false,
      }));
    } catch (err) {
      set({
        error: err.response?.data?.message || "Failed to delete company",
        loading: false,
      });
    }
  },
}));

export default useCompanyStore;
