//! React imports
import { useState } from "react";

//! Component imports
import styles from "./TaskItem.module.css";

// ! Library imports
import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export const TaskItem = ({ task }) => {
  //  State variable to update checked icon
  const [isChecked, setIsChecked] = useState(task.checked);

  // Function to handle the checkbox
  const handleCheckedBoxChange = (e) => {
    // ? Toggles the checkbox
    setIsChecked(!isChecked);
  };

  return (
    //? Tasks being displayed within the table
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleCheckedBoxChange}
          name={task.name}
          id={task.id}
        />
        {/* Label and display of tasks */}
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      {/* EDIT and DELETE Task Buttons */}
      <div className={styles["task-group"]}>
        <button
          className="btn"
          aria-label={`Update ${task.name} Task`}
          //  onClick={}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          //  onClick={}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
};
