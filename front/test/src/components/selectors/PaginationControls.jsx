// PaginationControls.js
import React from "react";
import styles from "../../PhotoGrid.module.css"; // Adjust the import path as necessary

const PaginationControls = ({
  currentPage,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div className={styles.pagination}>
      {currentPage > 1 && <button onClick={handlePrevPage}>Previous</button>}
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default PaginationControls;
