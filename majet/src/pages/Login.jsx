import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client"); // default role

  const handleLogin = (e) => {
    e.preventDefault();
    // send login request to backend
    console.log({ email, password, role });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          Deyall
        </h1>

        {/* Role Selector */}
        <div className="flex justify-center gap-4 mb-6">
          {["client", "marketer", "agent"].map((r) => (
            <button
              key={r}
              className={`px-4 py-2 rounded-lg font-medium ${
                role === r
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setRole(r)}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between text-sm mt-4 text-gray-600">
          <a href="/signup" className="hover:text-green-700">
            Sign Up
          </a>
          <a href="/forgot-password" className="hover:text-green-700">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
