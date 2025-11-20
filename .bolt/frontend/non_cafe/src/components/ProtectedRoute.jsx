import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken"); // check if logged in
  if (!token) return <Navigate to="/admin/login" replace />;
  return children;
}
