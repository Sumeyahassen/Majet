// src/services/AdminApi.js
import axios from "axios";

const API_BASE_URL = "https://non-cafe.onrender.com/api";

const AdminApi = {
  // Login function (already exists)
  login: async (email, password) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    return response.data;
  },

  // Save registration dates
  setRegistrationDates: async (academicYear, semester, openingDate, closingDate, isActive) => {
    try {
      const token = localStorage.getItem("adminToken"); // Get stored admin token
      const response = await axios.post(
        `${API_BASE_URL}/admin/configurations`,
        {
          academicYear,
          semester,
          openingDate,
          closingDate,
          isActive,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token for authentication
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Failed to save registration dates");
      } else {
        throw new Error(error.message || "Network error");
      }
    }
  },
  uploadStudents: async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file); // backend expects field name 'file'

      const token = localStorage.getItem("adminToken"); // if authentication needed

      const response = await axios.post(`${API_URL}/upload-students`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token ? `Bearer ${token}` : "", // optional if protected
        },
      });

      return response.data;
    } catch (error) {
      throw error.response?.data || new Error("Upload failed!");
    }
  },
  // Fetch all registered students
 getRegisteredStudents: async () => {
  try {
    const token = localStorage.getItem("adminToken");
    if (!token) throw new Error("Admin not logged in");

    const response = await axios.get(`${API_BASE_URL}/admin/registrations`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // return just the array of students
    return response.data.registrations || [];
  } catch (error) {
    console.error(error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch students");
  }
},

  
};

export default AdminApi;
