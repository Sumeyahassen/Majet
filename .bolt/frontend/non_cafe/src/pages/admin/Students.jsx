import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminApi from "../../servises/AdminApi";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // 🔍 new state for search

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await AdminApi.getRegisteredStudents();
        setStudents(Array.isArray(data) ? data : []); // ensure it's always an array
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // 🔍 Filter students based on search
  const filteredStudents = students.filter((student) => {
    const nameMatch = student.fullName
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const idMatch = student.studentId
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    return nameMatch || idMatch;
  });

  return (
    <div className="block md:block lg:flex dark:text-white">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-4">Registered Students</h2>

        {/* 🔍 Search Box */}
        <input
          type="text"
          placeholder="Search by Name or University ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2 border rounded w-full md:w-1/3"
        />

        {loading && <p>Loading students...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="p-2 border">Full Name</th>
                <th className="p-2 border">University ID</th>
                <th className="p-2 border">Department</th>
                <th className="p-2 border">Year</th>
                <th className="p-2 border">Bank Account</th>
                <th className="p-2 border">ID Image</th>
                <th className="p-2 border">Bank Image</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student._id}>
                    <td className="p-2 border">{student.fullName}</td>
                    <td className="p-2 border">{student.studentId}</td>
                    <td className="p-2 border">{student.department}</td>
                    <td className="p-2 border">{student.yearOfStudy}</td>
                    <td className="p-2 border">{student.bankAccountNumber}</td>
                    <td className="p-2 border">
                      <img
                        src={`https://non-cafe.onrender.com/${student.idCardImage}`}
                        alt="ID"
                        className="w-16"
                      />
                    </td>
                    <td className="p-2 border">
                      <img
                        src={`https://non-cafe.onrender.com/${student.bankBookImage}`}
                        alt="Bank"
                        className="w-16"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-2 border text-center" colSpan="7">
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
