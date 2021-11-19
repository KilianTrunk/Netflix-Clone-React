import "./css/App.css";
import * as React from "react";
import Navbar from "./components/Navbar";
import HomePage from "../src/pages/HomePage";
import FullMovieDetailsPage from "../src/pages/FullMovieDetailsPage";
import MyListDetailsPage from "../src/pages/MyListDetailsPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fullmovie" element={<FullMovieDetailsPage />} />
          <Route path="/mylist" element={<MyListDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
