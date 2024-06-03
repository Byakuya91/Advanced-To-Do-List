// * Library Imports
import { CheckIcon } from "@heroicons/react/24/outline";

// * React Imports
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  // Task state
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  // ? Escaping the modal

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  // function to submit a Task
  const handleFormSubmit = (e) => {
    //? prevents the page from reloading
    e.preventDefault();

    // updating the task
    // ? check if the task name has been updated

    if (updatedTaskName !== editedTask.name) {
      updateTask({ ...editedTask, name: updatedTaskName });
      toast.info("Task updated!");
    } else {
      toast.info("No changes made!");
    }

    // Close edit mode, regardless of changes.
    closeEditMode();
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
