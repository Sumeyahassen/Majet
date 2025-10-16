import React, { useState } from 'react'

function ToDoList() {
  const [tasks,setTask]=useState(["write","reade"]);
  const addTask=()=>{
   
const newTask=document.getElementById("newTask").value;
document.getElementById('newTask').value="";//imediyetely empity endihone
setTask(t=>([...t,newTask]));
//t represent current array listes ...t mens  the currect array ley add new array new demo manewu new task yemilaw 
  }
  return (
    <div>
      <div className="bg-gray-300">
        <input type="text"  placeholder='ensert task' id='newTask'/>
        <button onClick={addTask}>add task</button>
      </div>
      <ul>
        
       {
        tasks.map(
          (task,index)=>(
            <li>
              <span key={index}>{task}</span>
            </li>
          )
        )
       }
        
      </ul>
    </div>
  )
}

export default ToDoList
