// ? React imports
import { useState } from "react";

// ? Custom hooks imports
import useLocalStorage from "./CustomHooks/useLocalStorage";

// ?  Component imports
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
// ** 4) EDITING a task and updating it.
// ** 5) STORING the tasks in local storage with a custom hook.

function App() {
  //* Shared state: Tasks
  // ! useLocalStorage Hook takes in two params:
  // ! 1) name of the state
  // ! 2) the initial state
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);

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
