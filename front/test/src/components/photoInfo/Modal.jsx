// Modal component to display details of a selected photo
import React from "react";

const Modal = ({ photo, close }) => {
  // Don't render the modal if no photo is selected
  if (!photo) return null;

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h2>Photo Details</h2>
        {/* Displaying various properties of the photo */}
        <p>Views: {photo.views}</p>
        <p>Downloads: {photo.downloads}</p>
        <p>Collections: {photo.collections}</p>
        {/* Additional details can be added here */}
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

const modalStyle = {
  /* styles for modal background */
};
const modalContentStyle = {
  /* styles for modal content */
};

export default Modal;
