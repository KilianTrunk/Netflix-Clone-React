import React from "react";
import { Carousel } from "react-carousel-minimal";

const data = [
  {
    image:
      "https://image.tmdb.org/t/p/original/dgA83HDYm9SjfeiGT5AGlJpPPkj.jpg",
  },
  {
    image:
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
  },
  {
    image:
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
  },
  {
    image:
      "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
  },
  {
    image:
      "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
  },
  {
    image:
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
  },
];

export default class Slider extends React.Component {
  state = {
    data: data
  };

  async componentDidMount() {
    const url =
      "https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2";
    const response = await fetch(url);
    const json = await response.json();
    const data = json.results.slice(1).map(result => {
      return {
        image: "https://image.tmdb.org/t/p/original" + result.backdrop_path,
        caption: result.title,
        href: "/fullmovie?movieid=" + result.id
      }
    })
    data.length = 9;
    this.setState({ data: data });
    console.log(this.state.data)
    
  }

  render() {
    return (
      <div className="slider">
        <Carousel
          data={this.state.data}
          time={3000}
          width="850px"
          height="400px"
          radius="10px"
          slideNumber={false}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </div>
    );
  }
}