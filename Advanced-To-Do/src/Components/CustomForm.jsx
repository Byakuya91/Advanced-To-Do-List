// * Library Imports
import { PlusIcon } from "@heroicons/react/24/solid";

// * React Imports
import { useState } from "react";

// function to add a To-Do
const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(e);
};

const CustomForm = () => {
  // Task state
  const [task, setTask] = useState("");

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
