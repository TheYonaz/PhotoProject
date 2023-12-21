import {
  fetchPhotosStart,
  fetchPhotosSuccess,
  fetchPhotosFailure,
} from "../actions/photoActions";

export const fetchPhotos = (category, page) => async (dispatch) => {
  dispatch(fetchPhotosStart());
  try {
    const response = await fetch(
      `http://localhost:8181/photos/${category}?page=${page}`
    );
    const data = await response.json();
    dispatch(fetchPhotosSuccess(data));
  } catch (error) {
    dispatch(fetchPhotosFailure(error.message));
  }
};
