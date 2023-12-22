// SortingBar.js
import React from "react";

const SortingBar = ({ currentSort, handleSortChange }) => {
  return (
    <div>
      <select
        value={currentSort}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="popular">Popular</option>
        <option value="latest">Latest</option>
        <option value="id">ID</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
};

export default SortingBar;
