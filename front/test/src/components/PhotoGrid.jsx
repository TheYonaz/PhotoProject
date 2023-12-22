// Main component displaying the grid of photos
import React, { useState } from "react";
import styles from "../PhotoGrid.module.css";
import Modal from "./photoInfo/Modal";
import SortingBar from "./selectors/SortingBar"; // Ensure the path is correct

import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../REDUX/actions/photoActions";
import { fetchPhotos } from "../REDUX/thunk/thunk";
import CategorySelector from "./selectors/CategorySelector";
import PaginationControls from "./selectors/PaginationControls";

const PhotoGrid = () => {
  const dispatch = useDispatch();
  const { photos, loading, error, currentPage, currentCategory } = useSelector(
    (state) => state.photos
  );
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentSort, setCurrentSort] = useState("popular");
  const [showSortingBar, setShowSortingBar] = useState(false);

  // Handlers for pagination and photo selection

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    dispatch(setCurrentPage(nextPage));
    dispatch(fetchPhotos(currentCategory, nextPage, currentSort));
  };

  const handlePrevPage = () => {
    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    dispatch(setCurrentPage(prevPage));
    dispatch(fetchPhotos(currentCategory, prevPage, currentSort));
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const handleSortChange = (newSort) => {
    setCurrentSort(newSort);
    dispatch(fetchPhotos(currentCategory, currentPage, newSort));
  };

  const toggleSortingBar = () => {
    setShowSortingBar(!showSortingBar);
  };

  // Render loading, error or the photo grid

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.photoGridContainer}>
      {/* Components for sorting, categories, and pagination */}
      <button onClick={toggleSortingBar}>Sort Options</button>
      {showSortingBar && (
        <>
          <SortingBar
            currentSort={currentSort}
            handleSortChange={handleSortChange}
          />
          <CategorySelector />
        </>
      )}
      <div className={styles.photoGrid}>
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.previewURL}
            alt={photo.tags}
            className={styles.photo}
            onClick={() => handlePhotoClick(photo)}
          />
        ))}
      </div>
      <Modal photo={selectedPhoto} close={handleCloseModal} />
      <PaginationControls
        currentPage={currentPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
};

export default PhotoGrid;
