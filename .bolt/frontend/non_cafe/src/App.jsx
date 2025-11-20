import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

// Student components
import NavBar from "./components/NavBar";
import GideLine from "./pages/student/GideLine";
import StudentForm from "./components/StudentForm";
import CheckStates from "./pages/student/CheckStates";

// Admin components
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Students from "./pages/admin/Students";
import Settings from "./pages/admin/Settings";
import Reports from "./pages/admin/Reports";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
          {/* NavBar only for student pages */}
          <NavBar />

          <main className="flex-grow">
            <Routes>
              {/* ---------------- STUDENT ROUTES ---------------- */}
              <Route path="/" element={<GideLine />} />
              <Route path="/gideLine" element={<GideLine />} />
              <Route path="/regester" element={<StudentForm />} />
              <Route path="/checkstates" element={<CheckStates />} />

              {/* ---------------- ADMIN ROUTES ---------------- */}
              <Route path="/admin/login" element={<Login />} />

              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/students"
                element={
                  <ProtectedRoute>
                    <Students />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/reports"
                element={
                  <ProtectedRoute>
                    <Reports />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
