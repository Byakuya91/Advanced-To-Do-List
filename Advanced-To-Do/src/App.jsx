// ! React imports
import { useState } from "react";

// ! Custom Component imports
import CustomForm from "./Components/CustomForm";
import { TaskList } from "./Components/TaskList";

// TODOs;
// * 1) Created Bollerplate and cleared it(DONE)
// * 2)  Worked on CSS sheet(DONE)

//  ** COMPONENTS FOR PROJECT
// * A)  add TODOs(DONE)
// * B)  Create a Form to EDIT TODOs(DONE)
// * C)  Display TO-DOs(DONE)
// * D)   TO-DO element(DONE)

// ** CRUD functionality
// ** 1) ADDING a task(DONE)
// ** 2) DELETING a task(DONE)
// ** 3) updating the checked property of the object(DONE)
// ** 3) EDITING a task and updating it(ONGOING)

function App() {
  //* Shared state: Tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a Task
  const addTask = (task) => {
    // grabbing the task value and add it to tasks
    setTasks((prevState) => [...prevState, task]);
  };
  //  Function a way to delete tasks
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  // Function to update the check box object property
  const toggleTask = (id) => {
    // setting checked between true and false.
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  return (
    <div className="container">
      <header>
        <h1>My Tasks</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      )}
    </div>
  );
}

export default App;
