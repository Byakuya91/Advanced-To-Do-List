import React from "react";

const SelectTask = ({ filter, setFilter }) => {
  return (
    <div className="wrapperSearchBarContainer">
      <select
        className="select-custom"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      >
        <option value="all">All Tasks</option>
        <option value="completed">Completed </option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default SelectTask;
