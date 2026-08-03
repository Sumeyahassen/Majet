import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import { useTheme } from '../context/ThemeContext.jsx';


function Signup(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const {theme, toggleTheme} = useTheme()
    const navigate = useNavigate()
    const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`;

    const backToLogin = () =>{
        navigate("/Login")
    }

    const handleSubmit = async(e)=>{
      e.preventDefault();
      setError("");

      try{
        const res = await fetch(`${API_URL}/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({name, email, password}),
        })
        if(!res.ok){
          const data = await res.json();
          throw new Error(data.message ||"Signup failed");
        }
        const data = await res.json();
        localStorage.setItem("token", data.token);

        const intendedCategory = localStorage.getItem("intendedCategory");
        localStorage.removeItem("intendedCategory");

        if(intendedCategory){
          const catRes = await fetch(`${import.meta.env.VITE_API_URL}/api/categories`, {
            headers: { Authorization: "Bearer " + data.token }
          });
          const categories = await catRes.json();
          console.log("intendedCategory:", intendedCategory);
          console.log("categories from DB:", categories.map(c => c.name));
          const match = categories.find(c => c.name.toLowerCase() === intendedCategory.toLowerCase());
          console.log("match:", match);
          if(match){
            navigate(`/product-groups/${match._id}`);
            return;
          }
        }

        navigate("/category");
      } catch(err){
        setError(err.message);
      }
    }
    return(
        <>
        <button
  onClick={toggleTheme}
  className="w-26 sm:w-36 flex items-center justify-between px-4 py-2 m-3 rounded-full
             bg-linear-to-r from-green-400 to-green-600 
             text-white font-semibold shadow-lg
             hover:from-green-500 hover:to-green-700
             transition-all duration-300"
>
  <span className="flex items-center gap-2">
    {theme === "dark" ? "☀️ Light Mode" :"🌙 Dark Mode"}
  </span>
  <span
    className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300
      ${theme === "dark" ? "translate-x-16" : "translate-x-0"}`}
  />
</button>
        <form className={`w-[90%] max-w-[400px] my-10 mx-auto p-3 border rounded-2xl ${theme === "dark" ? "bg-green-500" : "bg-green-400 "}  border-gray-400 box-border`} onSubmit={handleSubmit}>
          {error && <p className = "text-red-600 block text-center"> {error}</p>}
            <h3 className='text-black text-4xl text-center mb-4 font-bold'>Signup</h3>
        <label className='text-black text-xl font-bold'>Username:</label>
        <input
        type="text"
        id="name"
        value={name}
        onChange ={(e)=>setName(e.target.value)}
        placeholder="Enter username"
        autoComplete='new name'
        className={`w-full p-2 my-2.5 rounded border border-gray-600 text-xl box-border text-black ${ theme === "dark" ? "bg-green-400 focus:bg-green-500": "bg-green-300 focus:bg-green-400"} `}
        required
        />
        <label className='text-black text-xl font-bold'>Email</label>
        <input
        type="email"
        id="email"
        value={email}
        onChange = {(e)=>setEmail(e.target.value)}
        placeholder="Enter email"
        autoComplete='new email'
        className={`w-full p-2 my-2.5 rounded border border-gray-600 text-xl box-border text-black ${ theme === "dark" ? "bg-green-400 focus:bg-green-500": "bg-green-300 focus:bg-green-400"}`}
        required
        />
        <label className='text-black text-xl font-bold'>Password:</label>
        <input
        type="password"
        id="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Enter password"
        autoComplete='new password'
        className={`w-full p-2 my-2.5 rounded border border-gray-600 text-xl box-border text-black ${ theme === "dark" ? "bg-green-400 focus:bg-green-500": "bg-green-300 focus:bg-green-400"}`}
        required

        />
        <button className={`block w-full max-w-45 my-5 mx-auto rounded font-bold text-xl cursor-pointer text-white ${theme === "dark" ? "bg-green-700 hover:text-black active:bg-green-600" : "bg-green-600 hover:bg-green-700 active:bg-green-500"}`}>Create Account</button>
        <p className="text-center block">Already have an account. <a className="text-blue-600 cursor-pointer" href="/login">Login</a></p>
        </form>
        </>
    )
}

export default Signup