import "./App.css";
import * as React from "react";
import HomePage from "../src/HomePage";
import Navbar from "./components/Navbar";
import FullMovieDetailsPage from "./FullMovieDetailsPage";

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
          <Route path="/" element={<HomePage />} />
          <Route path="/fullmovie" element={<FullMovieDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
