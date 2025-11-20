// src/components/StudentForm.jsx
import { useState } from "react";
import { studentRegister } from "../servises/studentApi";
import ImageUplode from "./ImageUplode";
import { Link } from "react-router-dom";

const StudentForm = () => {
  const [fullName, setFullName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [department, setDepartment] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [idCard, setIdCard] = useState(null);
  const [idCardPreview, setIdCardPreview] = useState(null);
  const [bankBook, setBankBook] = useState(null);
  const [bankBookPreview, setBankBookPreview] = useState(null);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle file uploads and previews
  const handleFileChange = (e, setFile, setPreview) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("File size should be less than 2MB");
      return;
    }

    setFile(file); // Keep actual file for FormData

    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result); // Base64 preview
    reader.readAsDataURL(file);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate all fields
  if (
    !fullName ||
    !studentId ||
    !department ||
    !yearOfStudy ||
    !bankAccountNumber ||
    !idCard ||
    !bankBook
  ) {
    setMessage("⚠️ Please fill all fields and upload your documents.");
    return;
  }

  const formData = new FormData();
  formData.append("fullName", fullName);
  formData.append("studentId", studentId);
  formData.append("department", department);
  formData.append("yearOfStudy", yearOfStudy);
  formData.append("bankAccountNumber", bankAccountNumber);
  formData.append("idCard", idCard); // binary file
  formData.append("bankBook", bankBook); // binary file

  try {
    await studentRegister(formData);

    setMessage("✅ Registration submitted successfully!");
    setSubmitted(true);
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || error?.message || "Upload failed. Try again.";
    setMessage(`❌ ${errorMessage}`);
  }
};


  return (
    <div className="max-w-2xl mx-auto w-full px-6 py-10">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          🎓 Student Registration
        </h1>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="dark:text-gray-100">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
              className="w-full mt-1 px-3 py-2 border rounded-lg  dark:bg-gray-600 dark:border-gray-600"
              required
            />
          </div>

          {/* Student ID */}
          <div>
            <label className="dark:text-gray-100">Student ID</label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="e.g. bdu123456"
              className="w-full mt-1 px-3 py-2 border rounded-lg  dark:bg-gray-600 dark:border-gray-600"
              required
            />
          </div>

          {/* Department + Year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="dark:text-gray-100">Department</label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="e.g. Computer Science"
                className="w-full mt-1 px-3 py-2 border rounded-lg  dark:bg-gray-600 dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label className="dark:text-gray-100">Year of Study</label>
              <input
                type="text"
                value={yearOfStudy}
                onChange={(e) => setYearOfStudy(e.target.value)}
                placeholder="e.g. 3rd Year"
                className="w-full mt-1 px-3 py-2 border rounded-lg  dark:bg-gray-600 dark:border-gray-600" 
                required
              />
            </div>
          </div>

          {/* Bank Account Number */}
          <div>
            <label className="dark:text-gray-100">Bank Account Number</label>
            <input
              type="text"
              value={bankAccountNumber}
              onChange={(e) => setBankAccountNumber(e.target.value)}
              placeholder="e.g. 1234567890"
              className="w-full mt-1 px-3 py-2 border rounded-lg dark:bg-gray-600 dark:border-gray-600"
              required
            />
          </div>

          {/* File Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="dark:text-gray-100">Upload University ID</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setIdCard, setIdCardPreview)}
                className="w-full mt-1 file:bg-blue-700 file:text-white file:px-4 file:py-2 file:rounded-lg  dark:text-gray-300" 
                required
              />
              {idCardPreview && <ImageUplode file={idCardPreview} />}
            </div>

            <div>
              <label className="dark:text-gray-100">Upload Bank Document</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setBankBook, setBankBookPreview)}
                className="w-full mt-1  file:bg-blue-700 file:text-white file:px-4 file:py-2 file:rounded-lg dark:text-gray-300"
                required
              />
              {bankBookPreview && <ImageUplode file={bankBookPreview} />}
            </div>
          </div>

          {/* Message */}
          {message && (
            <p
              className={`text-center text-sm font-medium ${
                message.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 px-4 text-lg font-semibold bg-blue-600 text-white rounded-lg"
          >
            Submit
          </button>

          {/* Success Link */}
          {submitted && (
            <div className="text-center mt-6">
              <Link
                to="/checkstates"
                className="px-6 py-3 bg-green-600 text-white rounded-lg"
              >
                ✅ Check Submitted Data
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
