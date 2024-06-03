import React from "react";
// ?CSS imports
import styles from "./SearchTasks.module.css";

const SearchTasks = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={styles["input-wrapper"]}>
      <input
        type="text"
        id="search"
        className={styles.input}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        required
        autoFocus
        placeholder=" "
      />
      <label htmlFor="search" className={styles.label}>
        Search Tasks
      </label>
    </div>
  );
};

export default SearchTasks;
