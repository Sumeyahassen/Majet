import React from "react";
import Input from "./components/Input";
import DeyalapButtons from "./components/DeyalapButtons";
function App() {
  return (
    <div className="overflow-y-hidden min-h-screen">
      <div className=" text-green-600  py-10 ">
        <h1 className="text-center  text-2xl font-semibold">
          {" "}
          እንኳን ወደ ማጀት የጥሪ መአከል በደና መጡ
        </h1>
      </div>
      <Input />
      <DeyalapButtons />
    </div>
  );
}

export default App;
