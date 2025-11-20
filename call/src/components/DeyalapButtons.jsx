import React, { useRef, useState } from "react";
import callFlow from "./callFlow";

export default function DeyalapButtons() {
  const [menuKey, setMenuKey] = useState(null); //to controle the next sounde
  const [isCalling, setIsCalling] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const audioRef = useRef(null);

  // Start call: play greeting
  const startCall = () => {
    const audio = audioRef.current;
    const startSound = callFlow.start.sound;
    audio.src = startSound;
    audio.currentTime = 0;
    audio.play();
    setIsCalling(true);
    setMenuKey(callFlow.start.nextMenu);
  };

  // End call: reset everything
  const endCall = () => window.location.reload();

  // Handle number button clicks
  const handleNumberClick = (num) => {
    if (!isCalling || !menuKey) return;

    const menu = callFlow[menuKey];
    const option = menu[num];
    if (!option) return;

    setSelectedButton(num);
    const audio = audioRef.current;
    audio.src = option.sound;
    audio.currentTime = 0;
    audio.play();

    // Go to next menu if defined
    audio.onended = () => {
      if (option.nextMenu) {
        setMenuKey(option.nextMenu);
      }
      setSelectedButton(null);
    };
  };

  return (
    <div className="bg-gray-700 text-white grid grid-cols-3 p-4 max-w-sm mx-auto border-[10px] border-black rounded-b-3xl">
      {/* Left column */}
      <div className="grid grid-cols-1">
        <button className="bg-blue-600 px-3 py-2 m-2 rounded-full text-xl hover:bg-blue-700">
          📳
        </button>
        <button
          onClick={startCall}
          className="bg-green-600 px-3 py-2 m-2 rounded-full text-xl hover:bg-green-700"
        >
          <audio ref={audioRef} />
          📞
        </button>
      </div>

      <button className="bg-cyan-600 my-6 m-4 rounded-3xl text-xl hover:bg-cyan-700">
        🔄
      </button>

      <div className="grid grid-cols-1">
        <button className="bg-gray-600 px-3 py-2 m-2 rounded-full text-xl hover:bg-gray-700">
          ↩️
        </button>
        <button
          onClick={endCall}
          className="bg-red-600 px-3 py-2 m-2 rounded-full text-xl hover:bg-red-700"
        >
          📴
        </button>
      </div>

      {/* Dial pad */}
      {[..."123456789*0#"].map((num) => (
        <button
          key={num}
          onClick={() => handleNumberClick(num)}
          className={`px-3 py-4 bg-black text-white m-2 rounded-b-lg text-lg font-semibold hover:bg-gray-800 ${
            selectedButton === num ? "bg-gray-600" : ""
          }`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
