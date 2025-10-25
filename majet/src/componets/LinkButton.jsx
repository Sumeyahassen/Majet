import React from "react";

function LinkButton({ onClick, text }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-lime-600  font-semibold p-2 rounded-md  text-white hover:bg-green-500 transition"
      >
        {text}
      </button>
    </div>
  );
}

export default LinkButton;
