import { combineReducers } from "redux";
import photosReducer from "../reducers/photosReducers";

const rootReducer = combineReducers({
  photos: photosReducer,
});

export default rootReducer;
