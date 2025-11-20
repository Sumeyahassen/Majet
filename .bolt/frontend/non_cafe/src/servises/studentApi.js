// src/servises/studentApi.js
import axios from "axios"; // ← make sure this is here

// Base URL of your backend
const API_BASE_URL = "https://non-cafe.onrender.com/api";

export const studentRegister = async (formData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/registrations/submit`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // required for file uploads
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
