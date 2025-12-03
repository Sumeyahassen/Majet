import React from "react";

function UpperBtn() {
  return (
    <div className="grid grid-cols-3 w-1/5 h-auto ml-80 items-center justify-center gap-4">
      <div className="grid grid-rows-2 gap-3">
        <button className="bg-blue-500 px-6 py-6  rounded-3xl"></button>
        <button className="bg-green-500 px-6 py-6  rounded-3xl"></button>
      </div>
      <button className="bg-gray-500 p-12 rounded-2xl"></button>
      <div className="grid grid-rows-2 gap-3">
        <button className="bg-red-300 px-6 py-6 rounded-3xl"></button>
        <button className="bg-red-700  px-6 py-6 rounded-3xl"></button>
      </div>
    </div>
  );
}

export default UpperBtn;
