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
    <div className="min-h-screen flex items-center justify-center bg-lime-200 ">
      <div className="bg-white shadow-lg rounded-xl p-14 w-full max-w-md">
        {/* Logo Name */}
        <h1 className="text-3xl font-bold text-lime-700 text-center mb-10">
          Majet
        </h1>

        {/* Role Selector */}
        <div className="flex justify-center gap-4 mb-6">
          {["client", "marketer", "agent"].map((r) => (
            <button
              key={r}
              className={`px-4 py-2 rounded-lg font-medium ${
                role === r
                  ? "bg-lime-600 text-white"
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
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lime-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lime-600"
            required
          />

          <button
            type="submit"
            className="bg-lime-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between text-sm mt-4 text-gray-600 mb-10">
          <a href="/signup" className="hover:text-lime-600 font-semibold">
            Sign Up
          </a>
          <a
            href="/forgotPassword"
            className="hover:text-lime-700 font-semibold"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
