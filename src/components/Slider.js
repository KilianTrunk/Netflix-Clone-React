import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Slider() {

  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2')
      .then(results => results.json())
      .then(data => {
        const movie = data.results;
        console.log(movie);
        data = movie.slice(1).map((movie) => {
          return {
            image: "https://image.tmdb.org/t/p/original" + movie.backdrop_path,
            caption: movie.title,
            href: "/fullmovie?movieid=" + movie.id
          };
        });
        data.length = 9;
        movie.forEach(function (value, index) {
        var selector = "img" + index;
        var element = document.getElementById(selector);
        if (element) {
          element.src =
            "https://image.tmdb.org/t/p/original" + value.backdrop_path;
          var hrefselector = "slider-img-" + index;
          document.getElementById(hrefselector).href =
            "/fullmovie?movieid=" + value.id;
          document.getElementById(selector).style.height = "30%";
          document.getElementById(selector).style.width = "100%";
      }
    })
      });
  }, []);

    return (
      <div className="slider">
        <Carousel
          showDots={true}
          responsive={responsive}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="SlideCenter">
            <a href="TBA" id="slider-img-1">
              <img id="img1" alt="" ></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="TBA" id="slider-img-2">
              <img id="img2" alt="" ></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="TBA" id="slider-img-3">
              <img id="img3" alt="" ></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="TBA" id="slider-img-4">
              <img id="img4" alt="" ></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="TBA" id="slider-img-5">
              <img id="img5" alt="" ></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="TBA" id="slider-img-6">
              <img id="img6" alt="" ></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="TBA" id="slider-img-7">
              <img id="img7" alt="" ></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="TBA" id="slider-img-8">
              <img id="img8" alt="" ></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="TBA" id="slider-img-9">
              <img id="img9" alt="" ></img>
            </a>
          </div>
        </Carousel>
      </div>
    );
}