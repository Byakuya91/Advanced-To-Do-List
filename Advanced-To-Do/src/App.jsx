// ! React imports
import { useState } from "react";

// ! Custom Component imports
import CustomForm from "./Components/CustomForm";
import { TaskList } from "./Components/TaskList";

// TODOs;
// * 1) Created Bollerplate and cleared it(DONE)
// * 2)  Worked on CSS sheet(DONE)
//  ** COMPONENTS FOR PROJECT
// * 1)  add TODOs(ONGOING)
// * 2)  Create a Form to EDIT TODOs
// * 3)  Display TO-DOs
// * 4)   TO-DO element

function App() {
  //* Shared state: Tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a Task
  const addTask = (task) => {
    // grabbing the task value and add it to tasks
    setTasks((prevState) => [...prevState, task]);
  };

  return (
    <div className="container">
      <header>
        <h1>My Tasks</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && <TaskList tasks={tasks} />}
    </div>
  );
}

export default App;
