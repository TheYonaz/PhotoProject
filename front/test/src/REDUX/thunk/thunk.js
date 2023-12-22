import {
  fetchPhotosStart,
  fetchPhotosSuccess,
  fetchPhotosFailure,
} from "../actions/photoActions";

export const fetchPhotos =
  (category, page, sort = "popular") =>
  async (dispatch) => {
    dispatch(fetchPhotosStart());
    try {
      const response = await fetch(
        `http://localhost:8181/photos/${category}?page=${page}&sort=${sort}`
      );
      const data = await response.json();
      dispatch(fetchPhotosSuccess(data));
    } catch (error) {
      dispatch(fetchPhotosFailure(error.message));
    }
  };
