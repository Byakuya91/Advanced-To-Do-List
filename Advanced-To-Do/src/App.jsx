// ! React imports
import { useState } from "react";

// ! Custom Component imports
import CustomForm from "./Components/CustomForm";

// TODOs;
// * 1) Created Bollerplate and cleared it(DONE)
// * 2)  Worked on CSS sheet(DONE)
//  ** COMPONENTS FOR PROJECT
// * 1)  add TODOs(ONGOING)
// * 2)  Create a Form to EDIT TODOs
// * 3)  Display TO-DOs
// * 4)   TO-DO element

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>My Tasks</h1>
      </header>
      <CustomForm />
    </div>
  );
}

export default App;
