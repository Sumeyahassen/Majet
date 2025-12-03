import React from 'react'
import { useState } from 'react'
function Phone() {
    const [Buttons ,setButtens] =useState([1,2,3,4,5,6,7,8,9,'*',0,'#'])
  return (
    <div className=' grid grid-cols-3 gap-2 min-h-screen mx-auto my-20'>  
      {Buttons.map((button)=>{
        return(

         <button key={button} className="px-1 py-4 bg-black text-white m-4 rounded-xl text-lg p-5 font-semibold hover:bg-gray-800">
            {button}
        </button>
    )

       
      
      })}
    </div>
  )
}

export default Phone
