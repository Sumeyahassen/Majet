import AdminSidebar from "../../components/AdminSidebar";

export default function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Welcome Admin!</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Here you can manage student registrations.
          </p>
        </div>

        {/* Overview / Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-200 text-gray-600 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Total Students</h2>
            <p className="text-2xl mt-2">120</p>
          </div>
          <div className="bg-green-200 text-gray-600 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Pending Approvals</h2>
            <p className="text-2xl mt-2">15</p>
          </div>
          <div className="bg-yellow-200 text-gray-600 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Current Session</h2>
            <p className="text-2xl mt-2">Open</p>
          </div>
        </div>

        {/* Optional: Additional content */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Recent Registrations</h2>
          <p className="text-gray-600 dark:text-gray-300">
            View recent student registrations and activity here.
          </p>
          {/* You can add a table or card list here */}
        </div>
      </div>
    </div>
  );
}
