import React, { useEffect } from "react";
import { useState, useRef } from "react";
import callAudio from "../../public/audio/megbiya1.mp3";
import sound1 from "../../public/audio/sound1.mp3";
import sound2 from "../../public/audio/sound2.mp3";
import sound3 from "../../public/audio/sound3.mp3";
import sound4 from "../../public/audio/sound4.mp3";
function Buttans() {
  const [SelectedButton, setSelectedButton] = useState(null);
  const [isCalling, setIsCalling] = useState(false); // track if call started
  const audioRef = useRef(null);
  function CallFunction() {
    audioRef.current.play();
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsCalling(true); // enable 1-4 buttons
    setSelectedButton(null); // reset previous selection
  }
  function EndFunction() {
    window.location.reload();
  }

  function handleNumberClick(value) {
    if (!isCalling) return; // do nothing if call not started

    setSelectedButton(value);

    switch (value) {
      case "1":
        audioRef.current.src = sound1;
        break;
      case "2":
        audioRef.current.src = sound2;
        break;
      case "3":
        audioRef.current.src = sound3;
        break;
      case "4":
        audioRef.current.src = sound4;
        break;
      default:
        return; // no sound for 5-9, 0, *, #
    }

    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }

  return (
    <div className="bg-gray-600 text-white grid grid-cols-3 py-2 px-3 mx-auto  h-auto max-w-sm justify-between border-[15px] border-black rounded-b-3xl">
      <div className="grid grid-cols-1">
        <button className="bg-blue-600 px-1 py-2  text-white m-4 rounded-full text-xl font-semibold hover:bg-blue-700">
          📳
        </button>
        <button
          id="call"
          onClick={() => CallFunction()}
          className="bg-green-600 px-1 py-2  text-white m-4 rounded-full text-xl font-semibold hover:bg-green-700"
        >
          <audio ref={audioRef} src={callAudio} />
          📞
        </button>
      </div>
      <button className="bg-cyan-600  my-6  text-white m-4 rounded-3xl text-xl font-semibold hover:bg-cyan-700">
        🔄
      </button>
      <div className="grid grid-cols-1">
        <button className="bg-gray-700 px-1 py-2  text-white m-4 rounded-full text-xl font-semibold hover:bg-gray-800">
          ↩️
        </button>
        <button
          id="end"
          onClick={() => EndFunction()}
          className=" bg-red-600 px-1 py-2  text-white m-4 rounded-full text-xl font-semibold hover:bg-red-700"
        >
          📴
        </button>
      </div>
      <button
        id="one"
        value="1"
        onClick={() => handleNumberClick("1")}
        className="px-1 py-4 bg-black text-white m-4 rounded-xl text-xl font-semibold hover:bg-gray-800"
      >
        1
      </button>
      <button
        id="two"
        value="2"
        onClick={() => handleNumberClick("2")}
        className="px-1 py-4 bg-black text-white m-4 rounded-xl text-xl font-semibold hover:bg-gray-800"
      >
        2
      </button>
      <button
        id="three"
        value="3"
        onClick={() => handleNumberClick("3")}
        className="px-1 py-4 bg-black text-white m-4 rounded-xl text-xl font-semibold hover:bg-gray-800"
      >
        3
      </button>
      <button
        id="four"
        value="4"
        onClick={() => handleNumberClick("4")}
        className="px-1 py-4 bg-black text-white m-4 rounded-xl text-lg font-semibold hover:bg-gray-800"
      >
        4
      </button>
      <button
        id="five"
        onClick={() => setSelectedButton("5")}
        className="px-1 py-4 bg-black text-white  m-4 rounded-xl text-lg font-semibold hover:bg-gray-800"
      >
        5
      </button>
      <button
        id="six"
        onClick={() => setSelectedButton("6")}
        className="px-1 py-4 bg-black text-white m-4 rounded-xl text-lg font-semibold hover:bg-gray-800"
      >
        6
      </button>
      <button
        id="seven"
        onClick={() => setSelectedButton("7")}
        className="px-1 py-4 bg-black text-white m-4 rounded-xl text-lg font-semibold hover:bg-gray-800"
      >
        7
      </button>
      <button
        id="eight"
        onClick={() => setSelectedButton("8")}
        className="px-1 py-4 bg-black text-white m-4 rounded-xl text-lg font-semibold hover:bg-gray-800"
      >
        8
      </button>
      <button
        id="nine"
        onClick={() => setSelectedButton("9")}
        className="px-1 py-4 bg-black text-white  m-4 rounded-xl text-lg font-semibold hover:bg-gray-800"
      >
        9
      </button>
      <button
        id="star"
        onClick={() => setSelectedButton("*")}
        className="px-1 py-4 bg-black text-white  m-4 rounded-xl text-lg font-semibold hover:bg-gray-800"
      >
        *
      </button>
      <button
        id="zero"
        onClick={() => setSelectedButton("0")}
        className="px-1 py-4 bg-black text-white m-4 rounded-xl text-lg font-semibold hover:bg-gray-800"
      >
        0
      </button>
      <button
        id="hash"
        onClick={() => setSelectedButton("#")}
        className="px-1 py-4 bg-black text-white m-4 rounded-xl text-lg font-semibold hover:bg-gray-800"
      >
        #
      </button>
    </div>
  );
}

export default Buttans;
