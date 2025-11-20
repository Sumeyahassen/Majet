import React, { useEffect, useState } from "react";
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
function Watch() {
  const [hr, setHr] = useState(hours);
  const [min, setMin] = useState(minutes);
  const [sec, setSec] = useState(seconds);
  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prevSec) => {
        if (prevSec + 1 === 60) {
          setMin((prevMin) => {
            if (prevMin + 1 === 60) {
              setHr((prevHr) => (prevHr + 1) % 24);
              return 0;
            }
            return prevMin + 1;
          });
          return 0;
        }
        return prevSec + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div>
      <h1>Current Time</h1>
      <h2>
        {hr}:{min}:{sec}
      </h2>
    </div>
  );
}

export default Watch;
