// * Library Imports
import { PlusIcon } from "@heroicons/react/24/solid";
import { v4 as uuidv4 } from "uuid";

// * React Imports
import { useState } from "react";

const CustomForm = ({ addTask }) => {
  // Task state
  const [task, setTask] = useState("");
  // function to submit a Task
  const handleFormSubmit = (e) => {
    //? prevents the page from reloading
    // STEP ONE: Reset the task to an empty string
    //   Step TWO: Adding the task
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: uuidv4(),
    });
    setTask("");
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
};

export default CustomForm;
