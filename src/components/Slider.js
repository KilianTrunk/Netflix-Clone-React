import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const data = {};

export default class Slider extends React.Component {
  state = {
    data: data,
  };

  async componentDidMount() {
    const url =
      "https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2";
    const response = await fetch(url);
    const json = await response.json();

    const data = json.results.slice(1).map((result) => {
      return {
        image: "https://image.tmdb.org/t/p/original" + result.backdrop_path,
        caption: result.title,
        href: "/fullmovie?movieid=" + result.id,
      };
    });
    data.length = 9;
    this.setState({ data: data });

    json.results.forEach(function (value, index) {
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
    });
  }

  render() {
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
            <a href="#" id="slider-img-1">
              <img id="img1"></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="#" id="slider-img-2">
              <img id="img2"></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="#" id="slider-img-3">
              <img id="img3"></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="#" id="slider-img-4">
              <img id="img4"></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="#" id="slider-img-5">
              <img id="img5"></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="#" id="slider-img-6">
              <img id="img6"></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="#" id="slider-img-7">
              <img id="img7"></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="#" id="slider-img-8">
              <img id="img8"></img>
            </a>
          </div>
          <div className="SlideCenter">
            <a href="#" id="slider-img-9">
              <img id="img9"></img>
            </a>
          </div>
        </Carousel>
      </div>
    );
  }
}
