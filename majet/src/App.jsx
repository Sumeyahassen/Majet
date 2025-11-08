import { useState } from "react";

import "./App.css";
import Home from "./componets/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;
