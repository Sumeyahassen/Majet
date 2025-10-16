import React, { useState } from "react";

function DialPad() {
  const [number, setNumber] = useState("");

  // Add digit to input
  const handleClick = (digit) => {
    setNumber((prev) => prev + digit);
  };

  // Clear last digit
  const handleBackspace = () => {
    setNumber((prev) => prev.slice(0, -1));
  };

  // End call → clear input
  const handleEndCall = () => {
    setNumber("");
    alert("Call Ended 📴");
  };

  // Call action
  const handleCall = () => {
    if (number === "") {
      alert("Enter a number first!");
    } else {
      alert(`Calling ${number} 📞...`);
      // TODO: integrate WebRTC / VoIP logic here
    }
  };

  return (
    <div className="mx-auto max-w-sm">
      {/* Input Field */}
      <div className="bg-gray-100 py-6 px-6 border-black border-[10px] rounded-t-3xl">
        <input
          type="text"
          value={number}
          readOnly
          className="bg-gray-100 text-2xl text-center focus:outline-none border-none w-full"
        />
      </div>

      {/* Buttons */}
      <div className="bg-gray-600 text-white grid grid-cols-3 py-2 px-3 border-[10px] border-black rounded-b-3xl">
        {/* Left column */}
        <div className="grid grid-cols-1">
          <button className="bg-blue-600 p-2 m-4 rounded-full text-xl hover:bg-blue-700">
            📳
          </button>
          <button
            onClick={handleCall}
            className="bg-green-600 p-2 m-4 rounded-full text-xl hover:bg-green-700"
          >
            📞
          </button>
        </div>

        {/* Middle */}
        <button className="bg-cyan-600 my-6 p-3 m-4 rounded-3xl text-xl hover:bg-cyan-700">
          🔄
        </button>

        {/* Right column */}
        <div className="grid grid-cols-1">
          <button
            onClick={handleBackspace}
            className="bg-gray-700 p-2 m-4 rounded-full text-xl hover:bg-gray-800"
          >
            ↩️
          </button>
          <button
            onClick={handleEndCall}
            className="bg-red-600 p-2 m-4 rounded-full text-xl hover:bg-red-700"
          >
            📴
          </button>
        </div>

        {/* Digits */}
        {["1","2","3","4","5","6","7","8","9","*","0","#"].map((digit) => (
          <button
            key={digit}
            onClick={() => handleClick(digit)}
            className="p-4 bg-black text-white m-4 rounded-xl text-xl font-semibold hover:bg-gray-800"
          >
            {digit}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DialPad;
