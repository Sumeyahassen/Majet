import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {FaSun,FaMoon} from 'react-icons/fa'



function NavBar() {
    const {darkMode,setDarkMode}=useTheme();
  return (
   
      <nav className="bg-white dark:bg-gray-700 shadow px-6 py-6 flex justify-between items-center">
        <Link to="/gideLine" className="text-gray-700 text-xl font-bold dark:text-blue-400 ">Gide line</Link>
        <div className=" flex gap-6 items-center">
             <Link to="/regester"  className="text-gray-800 text-lg font-semibold dark:text-gray-300">Register</Link>
    
          <Link to="/checkstates" className="text-gray-800 text-lg font-semibold dark:text-gray-300">check states</Link>
        </div>
        <button className="" onClick={() => setDarkMode(!darkMode)}>
            {darkMode? <FaSun/>:<FaMoon/>}
        </button>
      </nav>
   
  )
}

export default NavBar
