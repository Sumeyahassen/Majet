import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminApi from "../../servises/AdminApi";

export default function Settings() {
  const [academicYear, setAcademicYear] = useState("");
  const [semester, setSemester] = useState(1);
  const [openingDate, setOpeningDate] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!academicYear || !openingDate || !closingDate) {
      alert("Please fill in all required fields!");
      return;
    }

    setLoading(true);
    try {
      const result = await AdminApi.setRegistrationDates(
        academicYear,
        semester,
        openingDate,
        closingDate,
        isActive
      );
      alert("✅ Registration dates saved successfully!");
      console.log(result);
    } catch (error) {
      alert(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <AdminSidebar className="w-full md:w-64 flex-shrink-0" />
      <div className="flex-1 p-4 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          Settings
        </h2>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 md:p-6 mb-6">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Control Registration Dates</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Academic Year */}
            <div>
              <label className="block mb-2 font-medium">Academic Year:</label>
              <input
                type="text"
                value={academicYear}
                plaseholder="e.g. 2025-2026"
                onChange={(e) => setAcademicYear(e.target.value)}
                className="w-full p-2 md:p-3 border rounded dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Semester */}
            <div>
              <label className="block mb-2 font-medium">Semester:</label>
              <input
                type="number"
                value={semester}
                onChange={(e) => setSemester(Number(e.target.value))}
                className="w-full p-2 md:p-3 border rounded dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Opening Date */}
            <div>
              <label className="block mb-2 font-medium">Opening Date:</label>
              <input
                type="date"
                value={openingDate}
                onChange={(e) => setOpeningDate(e.target.value)}
                className="w-full p-2 md:p-3 border rounded dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Closing Date */}
            <div>
              <label className="block mb-2 font-medium">Closing Date:</label>
              <input
                type="date"
                value={closingDate}
                onChange={(e) => setClosingDate(e.target.value)}
                className="w-full p-2 md:p-3 border rounded dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Is Active */}
            <div className="col-span-1 sm:col-span-2 flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => setIsActive(!isActive)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-sm md:text-base">Is Active</span>
              </label>
            </div>
          </div>

          <div className="mt-6 flex justify-center md:justify-start">
            <button
              onClick={handleSave}
              disabled={loading}
              className={`w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded shadow ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
