// ? React imports
import { useState } from "react";

// ? Custom hooks imports
import useLocalStorage from "./CustomHooks/useLocalStorage";

// ?  Component imports
import CustomForm from "./Components/CustomForm";
import EditForm from "./Components/EditForm";
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
// ** 4) EDITING a task and updating it(ONGOING)
// ** 5) STORING the tasks in local storage with a custom hook(DONE)

function App() {
  //* Shared state: Tasks
  // ! useLocalStorage Hook takes in two params:
  // ! 1) name of the state
  // ! 2) the initial state
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);

  // ! EDITING TASK state variables
  const [editedTask, setEditedTask] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

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

  // Function to update a task
  const updateTask = (task) => {
    // setting checked between true and false.
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    // TODO: close the edit mode
  };

  //   Function to enter edit mode to update the task
  const enterEditMode = (task) => {
    // setting the edited task
    setEditedTask(task);
    setIsEditing(true);
    // TODO: set focus back to original.
  };

  return (
    <div className="container">
      <header>
        <h1>My Tasks</h1>
      </header>
      {isEditing && (
        <EditForm editedTask={editedTask} updateTask={updateTask} />
      )}
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default App;
