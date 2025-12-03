<<<<<<< HEAD

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
=======
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
>>>>>>> 023e9d05d8bb0002196024535705f0c250b95220
        
      </ul>
    </div>
  )
}

export default ToDoList
