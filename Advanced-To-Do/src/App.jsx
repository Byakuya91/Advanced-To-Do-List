// ? React imports
import { useState } from "react";

// ? Custom hooks imports
import useLocalStorage from "./CustomHooks/useLocalStorage";

// ?  Component imports
import CustomForm from "./Components/CustomForm";
import EditForm from "./Components/EditForm";
import { TaskList } from "./Components/TaskList";
import ThemeSwitcher from "./Components/ThemeSwitcher";

// ? Third party react imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify
import SearchTasks from "./Components/SearchTasks";
import SelectTask from "./Components/SelectTask";

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

// ** REFACTORING CODE
//  ** 1) Research useContext and refresh yourself how it works.
//  ** 2) Implement it into the project.

function App() {
  //* Shared state: Tasks
  // ! useLocalStorage Hook takes in two params:
  // ! 1) name of the state
  // ! 2) the initial state
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);

  // ? EDITING TASK state variables
  const [editedTask, setEditedTask] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  //  ? Other crucial pieces of state
  const [previousFocusElement, setPreviousFocusElement] = useState(null);

  // ? filtered tasks
  const [filter, setFilter] = useState("all");

  // ? Search query for searchTask bar
  const [searchQuery, setSearchQuery] = useState("");

  // ! Handler/ CRUD functions

  console.log("Tasks before filter", tasks);

  // Function to add a Task
  const addTask = (task) => {
    // grabbing the task value and add it to tasks
    setTasks((prevState) => [...prevState, task]);
    toast.success("Task added successfully!");
  };
  //  Function a way to delete tasks
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
    toast.error("Task deleted!");
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
    // toast.info("Task updated!");
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

  // ? state to handled filtered tasks
  const filteredTasks = tasks.filter((task) => {
    // ? conditional logic for the drop down
    return (
      (filter === "completed"
        ? task.checked
        : filter === "incomplete"
        ? !task.checked
        : true) &&
      //? Search query matches task name (case-insensitive)
      task.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <header>
        <h1>My Tasks for the week</h1>
        <div className="wrapperSearchBarContainer">
          <SearchTasks
            className="SearchTasksComponent"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <SelectTask
            className="SelectTasksComponent"
            filter={filter}
            setFilter={setFilter}
          />
          {/* <CustomForm className="CustomFormComponent" addTask={addTask} /> */}
        </div>
      </header>
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <CustomForm className="CustomFormComponent" addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={filteredTasks}
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
