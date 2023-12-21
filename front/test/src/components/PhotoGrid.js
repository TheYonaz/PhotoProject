import React from "react";
import styles from "../PhotoGrid.module.css";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../REDUX/actions/photoActions"; // Keep this import
import { fetchPhotos } from "../REDUX/thunk/thunk";
const PhotoGrid = () => {
  const dispatch = useDispatch();
  const { photos, loading, error, currentPage, currentCategory } = useSelector(
    (state) => state.photos
  );

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    dispatch(setCurrentPage(nextPage));
    dispatch(fetchPhotos(currentCategory, nextPage));
  };

  const handlePrevPage = () => {
    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    dispatch(setCurrentPage(prevPage));
    dispatch(fetchPhotos(currentCategory, prevPage));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.photoGridContainer}>
      <div className={styles.photoGrid}>
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.previewURL}
            alt={photo.tags}
            className={styles.photo}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        {currentPage > 1 && <button onClick={handlePrevPage}>Previous</button>}
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default PhotoGrid;
