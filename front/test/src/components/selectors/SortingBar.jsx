// Component for sorting options
import React from "react";

const SortingBar = ({ currentSort, handleSortChange }) => {
  // Dropdown for sorting options
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
        {/* More sorting options can be added here */}
      </select>
    </div>
  );
};

export default SortingBar;
