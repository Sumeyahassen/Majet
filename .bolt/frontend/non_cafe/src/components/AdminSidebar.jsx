import { NavLink } from "react-router-dom";
import { 
  FaBars, 
  FaTimes, 
  FaUserGraduate, 
  FaTachometerAlt, 
  FaFileAlt, 
  FaCog, 
  FaSignOutAlt 
} from "react-icons/fa";
import { useState } from "react";

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    < div>
      {/* Mobile / Tablet Top Bar */}
      <div className="lg:hidden bg-gray-800 text-white p-4 flex justify-between items-center w-full">
        <h2 className="text-lg font-bold">Admin Panel</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="justify-self-end">
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
            fixed top-0 left-0 h-screen lg:w-64  bg-gray-800 text-white p-4 z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:block
        `}
      >
        {/* Heading (hidden on mobile top bar) */}
        <h2 className="text-2xl  font-bold  my-8 hidden lg:block">Admin Panel</h2>

        {/* Menu Items */}
        <ul className="space-y-6">
          <li>
            <NavLink to="/admin/dashboard" className="flex items-center gap-2 text-2xl hover:text-gray-400">
              <FaTachometerAlt /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/students" className="flex items-center gap-2 text-2xl hover:text-gray-400">
              <FaUserGraduate /> Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/settings" className="flex items-center gap-2 text-2xl hover:text-gray-400">
              <FaCog /> Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/reports" className="flex items-center gap-2 text-2xl hover:text-gray-400">
              <FaFileAlt /> Reports
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/login" className="flex items-center gap-2 text-2xl hover:text-gray-400">
              <FaSignOutAlt /> LogOut
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Optional: Overlay on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
