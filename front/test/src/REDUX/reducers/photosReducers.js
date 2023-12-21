import {
  FETCH_PHOTOS_START,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  SET_CURRENT_PAGE,
  SET_CURRENT_CATEGORY,
} from "../actions/photoActions";

const initialState = {
  loading: false,
  photos: [],
  error: null,
  currentPage: 1,
  currentCategory: "sports", // Default category
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_START:
      return { ...state, loading: true, error: null };
    case FETCH_PHOTOS_SUCCESS:
      return { ...state, loading: false, photos: action.payload };
    case FETCH_PHOTOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SET_CURRENT_PAGE: // Include this case inside the switch
      return { ...state, currentPage: action.payload };
    case SET_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.payload };
    default:
      return state;
  }
};

export default photosReducer;
