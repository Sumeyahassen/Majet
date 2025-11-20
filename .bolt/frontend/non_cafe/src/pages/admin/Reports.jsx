import AdminSidebar from "../../components/AdminSidebar";
import { useState } from "react";
import AdminApi from "../../servises/AdminApi";

export default function Reports() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an Excel file to upload!");
      return;
    }

    setLoading(true);
    try {
      const result = await AdminApi.uploadStudents(file);
      alert("✅ Students uploaded successfully!");
      console.log(result);
      setFile(null);
    } catch (error) {
      alert(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen dark:text-white bg-gray-100 dark:bg-gray-900">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Upload Student List</h2>

        {/* File Input */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Select Excel File:</label>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            className="block w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          {file && <p className="mt-2 text-sm">Selected file: {file.name}</p>}
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
}
