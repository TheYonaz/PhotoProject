// Action type constants
export const FETCH_PHOTOS_START = "FETCH_PHOTOS_START";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const FETCH_PHOTOS_FAILURE = "FETCH_PHOTOS_FAILURE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";

// Action creators for dispatching actions
export const fetchPhotosStart = () => ({ type: FETCH_PHOTOS_START });
export const fetchPhotosSuccess = (photos) => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: photos,
});
export const fetchPhotosFailure = (error) => ({
  type: FETCH_PHOTOS_FAILURE,
  payload: error,
});
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
export const setCurrentCategory = (category) => ({
  type: SET_CURRENT_CATEGORY,
  payload: category,
});
