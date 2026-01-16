import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-hot-toast";


export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isLoggingIn: false,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      //   console.log("Auth check response:", res.data);
      set({ authUser: res.data.user });
    } catch (error) {
      //   console.log("Error in authCheck:", error.response?.data || error.message);
      console.error("Error in authCheck:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Signup successful!");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Signup failed. Please try again.";
      console.error("Signup Error:", errorMessage);
      toast.error(errorMessage);
      set({ authUser: null });
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Login successful!");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      console.error("Login Error:", errorMessage);
      toast.error(errorMessage);
    } finally {
      set({ isLoggingIn: false });
    }
  },
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error("Error logging out. Please try again.");
    }
  },
}));
