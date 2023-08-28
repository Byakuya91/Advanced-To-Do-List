// ? React imports
import { useState } from "react";

// ? Custom hooks imports
import useLocalStorage from "./CustomHooks/useLocalStorage";

// ?  Component imports
import CustomForm from "./Components/CustomForm";
import EditForm from "./Components/EditForm";
import { TaskList } from "./Components/TaskList";
import ThemeSwitcher from "./Components/ThemeSwitcher";

// TODOs;
// * 1) Created Bollerplate and cleared it(DONE)
// * 2)  Worked on CSS sheet(DONE)

//  ** COMPONENTS FOR PROJECT
// * A)  add TODOs(DONE)
// * B)  Create a Form to EDIT TODOs(DONE)
// * C)  Display TO-DOs(DONE)
// * D)   TO-DO element(DONE)

// ** CRUD functionality(FINISHED)
// ** 1) ADDING a task(DONE)
// ** 2) DELETING a task(DONE)
// ** 3) updating the checked property of the object(DONE)
// ** 4) EDITING a task and updating it(DONE)
// ** 5) STORING the tasks in local storage with a custom hook(DONE)

// ** THEME SWITCHER
//  ** 1) WORK ON CSS SHEET for Theme switcher(DONE)
//  ** 2) Work on creating ThemeProvider component(DONE)
//  ** 3) Code out logic for toggling light/dark mode and theme slider(DONE)

function App() {
  //* Shared state: Tasks
  // ! useLocalStorage Hook takes in two params:
  // ! 1) name of the state
  // ! 2) the initial state
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);

  // ! EDITING TASK state variables
  const [editedTask, setEditedTask] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  //  ! Other crucial pieces of state
  const [previousFocusElement, setPreviousFocusElement] = useState(null);

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
    // updates the task with a new name
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );

    closeEditMode();
  };

  // Function to close edit mode
  const closeEditMode = () => {
    // closing the editing window
    setIsEditing(false);
    previousFocusElement.focus();
  };

  //   Function to enter edit mode to update the task
  const enterEditMode = (task) => {
    // setting the edited task
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusElement(document.activeElement);
  };

  return (
    <div className="container">
      <header>
        <h1>My Tasks</h1>
      </header>
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
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
      <ThemeSwitcher />
    </div>
  );
}

export default App;
