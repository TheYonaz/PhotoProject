import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../REDUX/actions/photoActions"; // Adjust path as necessary
import { fetchPhotos } from "../REDUX/thunk/thunk";

const CategorySelector = () => {
  const dispatch = useDispatch();
  const categories = ["sports", "nature", "animals"]; // Example categories

  const handleCategoryChange = (category) => {
    dispatch(setCurrentPage(1));
    dispatch(fetchPhotos(category, 1));
  };

  return (
    <div>
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategoryChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
