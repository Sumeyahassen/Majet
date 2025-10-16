import { useState } from "react"


function Array() {
    const [foods,setFood]=useState(["kitfo","dorowet","goredgored"])
function addFoodHandler()
{
    const newFood=document.getElementById("newFood").value;
    document.getElementById("newFood").value="";
    setFood(f=>([...f,newFood]))
} 
// food yemnlewu  leyebichachewu yemigebutn  span ley yasgebanewun endemaklet newu
function removeFoodHndler(index){
const newfoodlist=foods.filter((_,food)=>food!==index)
setFood(newfoodlist)
}
return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h1> list of food</h1>
      <ul>
        {foods.map((food,index)=>(
            <li ><span key={index}>{food}</span>
             <button onClick={()=>removeFoodHndler(index)} className="border-black  border-2 m-1 pl-4"> delete</button></li>
        ))}
      </ul>
      <input type="text" placeholder="ensert food" id="newFood" />
      <button onClick={addFoodHandler}>add food</button>
    </div>
  )
}

export default Array
