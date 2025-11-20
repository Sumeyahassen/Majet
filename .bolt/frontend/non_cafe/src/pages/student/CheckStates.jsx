import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CheckStates() {
  const [submission, setSubmission] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("lastSubmission");
      if (raw) {
        setSubmission(JSON.parse(raw));
      }
    } catch {
      setSubmission(null);
    }
  }, []);

  if (!submission) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white dark:bg-gray-800 shadow rounded-xl p-8 text-center">
          <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-300">ℹ️</div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">No submission yet</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Please complete the registration form to see your latest submission here.</p>
          <div className="mt-6">
            <Link to="/regester" className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">Go to Registration</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto w-full px-4 py-20">
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl px-6 py-20">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Last Submission</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Below are the details you submitted most recently.</p>
          </div>
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200">Submitted</span>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="">
            <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">First Name</div>
            <div className="mt-1 text-gray-900 dark:text-gray-100 font-medium">{submission.firstName}</div>
          </div>
          <div className="">
            <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Middle Name</div>
            <div className="mt-1 text-gray-900 dark:text-gray-100 font-medium">{submission.middleName}</div>
          </div>
          <div className="">
            <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Last Name</div>
            <div className="mt-1 text-gray-900 dark:text-gray-100 font-medium">{submission.lastName}</div>
          </div>
          <div className="">
            <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">University ID</div>
            <div className="mt-1 text-gray-900 dark:text-gray-100 font-medium">{submission.universityId}</div>
          </div>
          {/* images see */}
          {submission.idCard && (
            <div>
              <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">University ID Image</div>
              <div className="mt-1">
                <img src={submission.idCard} alt="University ID" className="h-32 rounded border" />
              </div>
            </div>
          )}
          {submission.bankDoc && (
            <div>
              <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Bank Document</div>
              <div className="mt-1">
                <img src={submission.bankDoc} alt="Bank Document" className="h-32 rounded border" />
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-300">Files were uploaded with the form.</div>
          <div className="space-x-3">
            <Link to="/regester" 
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">New Registration</Link>
            <Link to="/gideLine" 
            className="inline-block px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 bg-gray-300 dark:text-gray-900 rounded-md hover:bg-gray-400 dark:hover:bg-gray-300">Guideline</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckStates;

