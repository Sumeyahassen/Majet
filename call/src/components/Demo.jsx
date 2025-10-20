import React, { useState } from "react";

function Demo() {
  const [input, setinpute] = useState("");
  const inpteTacker = (btn) => {
    setinpute(btn);
  };
  return (
    <div className="">
      <input
        type="text"
        value={input}
        className="w-full border-2 border-black rounded-lg text-2xl text-center mb-4"
      />
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((btn) => (
          <button onClick={() => inpteTacker(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}

export default Demo;
// wedelayla component import lemareg  yeminaregewun neger
// for exaple
// const [fullnames,setFullNametate([
//   {firstNAme:'',LastName:'',MiddleName:''},
//   {firstNAme:'',LastName:'',MiddleName:''},
//   {firstNAme:'',LastName:'',MiddleName:''},
//   {firstNAme:'',LastName:'',MiddleName:''}
// ])
// for develay sintekemewu
// <div>
// {
//   fullnames.map((FFName ,index)=>
//  return (
// <FullNameDesplayComponent
// firstName={FFname.firstName}
// LastName={FFname.lastname}
// MiddleName={FFname.Middlename}
// />
//   ))
// }
// </div>
