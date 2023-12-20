import rootReducer from "../reducers/rootReducers";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: rootReducer,
});

export default store;
