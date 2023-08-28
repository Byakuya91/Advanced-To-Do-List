// * Library Imports
import { CheckIcon } from "@heroicons/react/24/outline";

// * React Imports
import { useState } from "react";

const EditForm = ({ editedTask, updateTask }) => {
  // Task state
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
  // function to submit a Task
  const handleFormSubmit = (e) => {
    //? prevents the page from reloading
    e.preventDefault();

    // updating the task
    // updateTask();
  };

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  );
};
export default EditForm;
