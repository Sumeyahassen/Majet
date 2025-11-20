import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import AdminApi from "../../servises/AdminApi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await AdminApi.login(email, password); // call API
      localStorage.setItem("adminToken", data.token); // save JWT
      navigate("/admin/dashboard"); // redirect
    } catch (error) {
      alert("To use incorrect email or password"); // display backend error
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:text-white">
      <form
        onSubmit={handleLogin}
        className="bg-white px-8 py-12 rounded-lg shadow-md w-1/2 relative"
      >
        <h2 className="text-xl font-bold mb-6 text-center">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 py-3 px-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        
        />

        <div className="relative w-full mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full py-3 px-4 pr-10 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold text-2xl py-5 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
