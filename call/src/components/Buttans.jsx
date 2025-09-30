import React from 'react'

function Buttans() {
  return (
    <div className='bg-gray-600 text-white grid grid-cols-3 py-2 px-3 mx-auto  max-w-sm justify-between border-[15px] border-black rounded-b-3xl' >
      <div className="grid grid-cols-1">
        <button className="bg-blue-600 px-1 py-2  text-white m-4 rounded-full text-xl font-semibold">📳</button>
        <button className="bg-green-600 px-1 py-2  text-white m-4 rounded-full text-xl font-semibold">📞</button>
      </div>
      <button className="bg-cyan-600  my-6  text-white m-4 rounded-3xl text-xl font-semibold">🔄</button>
       <div className="grid grid-cols-1">
        <button className="bg-gray-700 px-1 py-2  text-white m-4 rounded-full text-xl font-semibold">↩️</button>
        <button className=" bg-red-600 px-1 py-2  text-white m-4 rounded-full text-xl font-semibold">📴</button>
      </div>
   <button className="px-1 py-4 bg-black text-white m-4 rounded-xl text-xl font-semibold hover" >1</button>
   <button className="px-1 py-4 bg-black text-white m-4 rounded-xl text-xl font-semibold">2</button>
   <button className="px-1 py-4 bg-black text-white m-4 rounded-xl text-xl font-semibold">3</button>
   <button className="px-1 py-4 bg-black text-white m-4 rounded-xl text-lg font-semibold">4</button>
   <button className="px-1 py-4 bg-black text-white  m-4 rounded-xl text-lg font-semibold">5</button>
   <button className="px-1 py-4 bg-black text-white m-4 rounded-xl text-lg font-semibold">6</button>
   <button className="px-1 py-4 bg-black text-white m-4 rounded-xl text-lg font-semibold">7</button>
   <button className="px-1 py-4 bg-black text-white m-4 rounded-xl text-lg font-semibold">8</button>
   <button className="px-1 py-4 bg-black text-white  m-4 rounded-xl text-lg font-semibold">9</button>
   <button className="px-1 py-4 bg-black text-white  m-4 rounded-xl text-lg font-semibold">*</button>
   <button className="px-1 py-4 bg-black text-white m-4 rounded-xl text-lg font-semibold">0</button>
   <button className="px-1 py-4 bg-black text-white m-4 rounded-xl text-lg font-semibold">#</button>
    </div>
  )
}

export default Buttans
