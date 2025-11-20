import React from "react";
import { Link } from "react-router-dom";
function LinkButton({ text, link }) {
  return (
    <div>
      <Link
        to={link}
        className="bg-lime-600  font-semibold p-2 rounded-md  text-white hover:bg-green-500 transition"
      >
        {text}
      </Link>
    </div>
  );
}

export default LinkButton;
