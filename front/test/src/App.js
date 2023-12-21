import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPhotos } from "./REDUX/thunk/thunk"; // Adjust path as necessary
import "./App.css";
import PhotoGrid from "./components/PhotoGrid"; // Adjust path as necessary
import CategorySelector from "./components/CategorySelector";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos("sports", 1)); // Fetch photos on initial load
  }, [dispatch]);

  return (
    <div className="App">
      ,<CategorySelector />
      <PhotoGrid />
    </div>
  );
}

export default App;
