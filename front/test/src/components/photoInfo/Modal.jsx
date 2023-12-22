// Modal.js
import React from "react";

const Modal = ({ photo, close }) => {
  if (!photo) return null;

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h2>Photo Details</h2>
        {/* Add more details as needed */}
        <p>Views: {photo.views}</p>
        <p>Downloads: {photo.downloads}</p>
        <p>Collections: {photo.collections}</p>
        {/* ... other details */}
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
