// for testing
import React, { useState } from "react";

const StudentRegister= () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    universityId: "",
  });

  const [message, setMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // insert data  validation
    if (
      !formData.firstName ||
      !formData.middleName ||
      !formData.lastName ||
      !formData.universityId|| 
      !formData.idCard|| 
      !formData.bankDoc
    ) {
      setMessage("⚠️ Please fill in all fields! properly");
      return;
    }

    // TODO: send to backend (later)
    console.log("Form submitted:", formData);

    setMessage("✅ Registration successful! Proceed to next form.");
   
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          Student Registration
        </h1>

        {message && (
          <p className="mb-4 text-center text-sm text-blue-600 dark:text-blue-400">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            value={formData.middleName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            name="universityId"
            placeholder="University ID"
            value={formData.universityId}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
          />
          <input
            type="file"
            name="bankDoc"
            placeholder="Bank Document"
            value={formData.bankDoc}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
