import React from 'react'
import { Link } from 'react-router-dom'
function GideLine() {
  return (
   <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Welcome to Student Registration
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Register easily by write full name,uploading your University ID and Bank Account document.
      </p>
      <Link
        to="/regester"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Start Registration
      </Link>
    </div>
  )
}

export default GideLine
