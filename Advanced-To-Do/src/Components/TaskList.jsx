// ! Component imports
import styles from "./TaskList.module.css";

// ! Styles imports
// import styles from "./TaskList.module.css";
import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks }) => {
  return (
    <ul className={styles.tasks}>
      {/* DISPLAYING THE TASKS */}
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
    </ul>
  );
};
