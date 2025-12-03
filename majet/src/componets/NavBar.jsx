import React from "react";

function NavBar({ onClick, text }) {
  return (
    <div>
      <div className="text-xl font-semibold cursor-pointer " onClick={onClick}>
        {text}
      </div>
    </div>
  );
}

export default NavBar;
