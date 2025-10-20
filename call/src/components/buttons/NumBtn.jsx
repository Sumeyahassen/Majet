import React, { useState } from "react";

function NumBtn() {
  const [buttons, setButtons] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "*",
    "0",
    "#",
  ]);
  return (
    <div className="bg-gray-700 w-1/5 h-66 ml-80 items-center justify-center gap-4 rounded-b-xl ">
      <div className="grid grid-cols-3 p-50">
        {buttons.map((button, index) => (
          <button className="bg-gray-300 m-2 p-6  rounded-3xl" key={index}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NumBtn;
