import React from "react";
import Buttans from "./components/Buttans";
import Input from "./components/Input";
import DialPad from "./components/DialPad";
import Array from "./Array";
import ToDoList from "./ToDoList";
import Phone from "./components/Phone";
import Demo from "./components/Demo";
import UpperBtn from "./components/buttons/UpperBtn";
import NumBtn from "./components/buttons/NumBtn";
import Todo from "./components/todo/Todo";
function App() {
  return (
    <div className="overflow-y-hidden min-h-screen">
      <div className=" text-green-600  py-10 ">
        <h1 className="text-center  text-2xl font-semibold">
          {" "}
          Welcame to Majet Call Senter
        </h1>
      </div>
      {/* <Input />
      <Buttans /> */}
      {/* <DialPad/>  */}
      {/* <Array/> */}
      {/* <ToDoList/> */}
      {/* <Phone/> */}
      {/* <Demo /> */}
      {/* <UpperBtn />
      <NumBtn /> */}
      <Todo />
    </div>
  );
}

export default App;
