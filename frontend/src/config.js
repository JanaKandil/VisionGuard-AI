// Base URL of the VisionGuard API.
// Set VITE_API_URL in frontend/.env (see .env.example).
// Use an empty string when the API serves the frontend from the same origin.
export const API_BASE_URL = (
  import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000"
).replace(/\/$/, "");
