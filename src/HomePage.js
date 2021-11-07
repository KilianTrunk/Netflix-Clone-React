import "./App.css";
import * as React from "react";
import FeaturedItems from "./components/FeaturedItems";
import PopularItems from "./components/PopularItems";
import Slider from "./components/Slider";
import RandomDOM from "./datafun/RandomDOM";

function HomePage() {
  return (
      <>
        <FeaturedItems />
        <PopularItems />
        <Slider />
        <RandomDOM />
        </>
  );
}

export default HomePage;
