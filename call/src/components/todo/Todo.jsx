import React, { useState } from "react";
import "./todo.css";
function Todo() {
  const [Tasks, setTasks] = useState(["learn machin learing", "practes react"]);
  const [NewTask, setNewTask] = useState("");
  //   ################# event controler ################
  const Handlevent = (e) => {
    setNewTask(e.target.value);
  };
  //   ################# task adder ################
  const AddTask = () => {
    if (NewTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, NewTask]);
      setNewTask("");
    }
  };
  //   ################# task deleter ################
  const DeleteTask = (index) => {
    const updateTasks = Tasks.filter((_, deletTask) => deletTask !== index);
    setTasks(updateTasks);
  };
  //   ################# move up ################
  const MoveUpTask = (index) => {
    if (index > 0) {
      const updateTasksPosition = [...Tasks];
      [updateTasksPosition[index - 1], updateTasksPosition[index]] = [
        updateTasksPosition[index],
        updateTasksPosition[index - 1],
      ];
      setTasks(updateTasksPosition);
    }
  };
  //   ################# move down ################
  const MoveDownTask = (index) => {
    if (index < Tasks.length - 1) {
      const updateTasksPosition = [...Tasks];
      [updateTasksPosition[index + 1], updateTasksPosition[index]] = [
        updateTasksPosition[index],
        updateTasksPosition[index + 1],
      ];
      setTasks(updateTasksPosition);
    }
  };
  return (
    <div className="h-screen w-[70%] ">
      <h1 className="text-[4rem]">ToDo App</h1>
      <div className="">
        <input
          type="text"
          placeholder="Enter your task ..."
          onChange={Handlevent}
          value={NewTask}
          size={90}
          className="border-3 border-black py-5 mb-3 bg-gray-300 focus:border-none"
        />
        <button
          onClick={AddTask}
          className="bg-green-500 py-5  px-10 ml-3 rounded-lg text-[1.4] font-bold"
        >
          Add
        </button>
      </div>
      <ul className="border-black border-1">
        {Tasks.map((task, index) => (
          <li
            className="grid grid-cols-2 px-24 py-10  bg-gray-300  rounded-md"
            key={index}
          >
            <span className="flex text-[1.4rem] font-bold">{task}</span>
            <div className="flex gap-x-5">
              <button
                onClick={() => DeleteTask(index)}
                className=" rounded-lg text-[1.4rem] font-bold  bg-red-500 px-12 py-3"
              >
                Delete
              </button>
              <button
                onClick={() => MoveUpTask(index)}
                className=" text-[1.4rem] font-bold rounded-lg bg-blue-500 px-12 py-3"
              >
                Move ^
              </button>
              <button
                onClick={() => MoveDownTask(index)}
                className="text-[1.4rem] font-bold  rounded-lg bg-blue-500 px-12 py-3"
              >
                Move <span className="">V</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
