import React from "react";
import { Link } from "react-router-dom";
function NavBar({ link, text }) {
  return (
    <div>
      <Link to={link} className="text-xl font-semibold cursor-pointer ">
        {text}
      </Link>
    </div>
  );
}

export default NavBar;
