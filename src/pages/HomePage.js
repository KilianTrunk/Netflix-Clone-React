import "../css/App.css";
import * as React from "react";
import FeaturedItems from "../components/FeaturedItems";
import PopularItems from "../components/PopularItems";
import Slider from "../components/Slider";

function HomePage() {
  return (
    <>
      <FeaturedItems />
      <PopularItems />
      <Slider />
    </>
  );
}

export default HomePage;
