
import React, { useState } from 'react'
function ToDoList() {
    const [tasks,setTasks]=useState(["write"]) ;
    function addTaskHandler(){
        const newTask=document.getElementById("TaskTacke").value;
        document.getElementById("TaskTacke").value="";
        setTasks((t=>[...t,newTask]));

    }
    // hulgiza yehonen task remove lemareg   parameter yasfelgal
    function removeTaskHandler(delateTask){
alert("yes i do")
    }
     return (
    <div>
      <h1> Day to Day function list Displayer</h1>
{/* task adding place */}
      <div className="">
        <input type="text" placeholder="insert tasks" id="TaskTacke"/>
        <button onClick={addTaskHandler}>AddTask</button>
      </div>
{/* task list place */}
      <ul>
        {tasks.map((task,index)=>{ 
      <li>
            <span key={index}>{task}</span>
            <button onClick={()=>removeTaskHandler(elateTask)} >Delate</button>
        </li>
        })}
        
      </ul>
    </div>
  )
}

export default ToDoList
