import "./App.css";
import * as React from "react";
import HomePage from "../src/HomePage";
import Navbar from "./components/Navbar";
import FullMovieDetailsPage from "./FullMovieDetailsPage";
import MyListDetailsPage from "./MyListDetailsPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content" >
        <Routes>
          <Route path="/netflix-clone-react/" element={<HomePage />} />
          <Route path="/netflix-clone-react/fullmovie" element={<FullMovieDetailsPage />} />
          <Route path="/netflix-clone-react/mylist" element={<MyListDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
