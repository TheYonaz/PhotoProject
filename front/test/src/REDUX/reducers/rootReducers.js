// Combining reducers for the Redux store
import { combineReducers } from "redux";
import photosReducer from "../reducers/photosReducers";

const rootReducer = combineReducers({
  photos: photosReducer, // Reducer for photo-related state
});

export default rootReducer;
