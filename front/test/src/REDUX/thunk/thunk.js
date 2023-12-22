// Thunk action for fetching photos with sorting
import {
  fetchPhotosStart,
  fetchPhotosSuccess,
  fetchPhotosFailure,
} from "../actions/photoActions";

export const fetchPhotos =
  (category, page, sort = "popular") =>
  async (dispatch) => {
    dispatch(fetchPhotosStart()); // Dispatch start action before fetching
    try {
      const response = await fetch(
        `http://localhost:8181/photos/${category}?page=${page}&sort=${sort}`
      );
      const data = await response.json();
      dispatch(fetchPhotosSuccess(data)); // Dispatch success action with fetched data
    } catch (error) {
      dispatch(fetchPhotosFailure(error.message)); // Dispatch failure action in case of an error
    }
  };
