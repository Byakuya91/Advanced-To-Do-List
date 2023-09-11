// ? React imports
import React, { createContext, useContext, useState } from "react";

// ? Custom hooks
import useLocalStorage from "../CustomHooks/useLocalStorage";

// TODO: Create the Context(DONE)
const TaskContext = createContext();

//TODO:  Create a custom hook to use the Context(DONE)
export const useTaskContext = () => {
  return useContext(TaskContext);
};

// TODO: Create the provider(DONE)

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);

  // ! EDITING TASK state variables
  const [editedTask, setEditedTask] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  //  ! Other crucial pieces of state
  const [previousFocusElement, setPreviousFocusElement] = useState(null);

  // ?Function to add a Task
  const addTask = (task) => {
    // grabbing the task value and add it to tasks
    setTasks((prevState) => [...prevState, task]);
  };
  //  ?Function a way to delete tasks
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  // ?Function to update the check box object property
  const toggleTask = (id) => {
    // setting checked between true and false.
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  // ?Function to update a task
  const updateTask = (task) => {
    // updates the task with a new name
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );

    closeEditMode();
  };

  // ?Function to close edit mode
  const closeEditMode = () => {
    // closing the editing window
    setIsEditing(false);
    previousFocusElement.focus();
  };

  //   ?Function to enter edit mode to update the task
  const enterEditMode = (task) => {
    // setting the edited task
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusElement(document.activeElement);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        editedTask,
        isEditing,
        addTask,
        deleteTask,
        toggleTask,
        updateTask,
        enterEditMode,
        closeEditMode,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
