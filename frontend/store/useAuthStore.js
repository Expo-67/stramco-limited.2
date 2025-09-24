import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

//backend URL
const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      error: null,

      // Signup ✏️
      signup: async (fullname, email, password) => {
        try {
          set({ loading: true, error: null });
          const { data } = await axios.post(
            `${backendURL}/api/auth/signup`,
            { fullname, email, password },
            { withCredentials: true }
          );
          set({ user: data.user, loading: false });
        } catch (err) {
          set({
            error: err.response?.data?.message || "Signup failed",
            loading: false,
          });
        }
      },

      // Login✅
      login: async (email, password) => {
        try {
          set({ loading: true, error: null });
          const { data } = await axios.post(
            `${backendURL}/api/auth/login`,
            { email, password },
            { withCredentials: true }
          );
          set({ user: data.user, loading: false });
          return true; // Return success
        } catch (err) {
          set({
            error: err.response?.data?.message || "Login failed",
            loading: false,
          });
          return false; // Return failure
        }
      },

      // Logout 🚪
      logout: async () => {
        try {
          await axios.post(
            `${backendURL}/api/auth/logout`,
            {},
            { withCredentials: true }
          );
          set({ user: null });
        } catch (err) {
          console.error("Logout error:", err);
        }
      },

      // Fetch current user
      fetchUser: async () => {
        try {
          const { data } = await axios.get(`${backendURL}/api/auth/me`, {
            withCredentials: true,
          });
          set({ user: data.user });
        } catch {
          set({ user: null });
        }
      },
    }),
    {
      name: "auth-storage", // key in localStorage
      partialize: (state) => ({ user: state.user }), // only persist `user`
    }
  )
);

export default useAuthStore;
