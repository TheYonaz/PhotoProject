// Configuring the Redux store with the root reducer
import rootReducer from "../reducers/rootReducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer, // The combined reducer
});

export default store;
