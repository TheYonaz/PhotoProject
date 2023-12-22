import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCurrentPage,
  setCurrentCategory,
} from "../../REDUX/actions/photoActions";
import { fetchPhotos } from "../../REDUX/thunk/thunk";

const CategorySelector = () => {
  const dispatch = useDispatch();
  const [inputCategory, setInputCategory] = useState("");
  const [error, setError] = useState(""); // State for error message

  const handleSearch = () => {
    // Clear previous error
    setError("");

    if (inputCategory.trim() === "") {
      setError("Please enter a category before searching.");
      return;
    }

    dispatch(setCurrentCategory(inputCategory));
    dispatch(setCurrentPage(1));
    dispatch(fetchPhotos(inputCategory, 1));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputCategory}
        onChange={(e) => setInputCategory(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <div style={{ color: "red" }}>{error}</div>}{" "}
      {/* Display error message */}
    </div>
  );
};

export default CategorySelector;
