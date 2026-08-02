import axios from "axios";

// In production (single Vercel project) the API lives at /api on the same
// domain. VITE_API_URL only needs to be set if the API is deployed separately.
const baseURL = `${import.meta.env.VITE_API_URL ?? ""}/api`;

const api = axios.create({ baseURL });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("cc_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Normalizes errors so components can trust `err.message` is safe to show.
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const message =
      err.response?.data?.message ||
      (err.request && !err.response
        ? "Can't reach the server right now. Please try again in a moment."
        : "Something went wrong. Please try again.");
    return Promise.reject(new Error(message));
  }
);

export default api;
