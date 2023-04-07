import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popularPlacesList } from "../Data/Popular";

function TrendingPackages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagesList = popularPlacesList();
    setImages(imagesList);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 4,
    centerMode: true,
    className: "center",
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1,slidesPerRow: 1, infinite: true }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, slidesPerRow: 1, infinite: true }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, slidesPerRow: 4, infinite: false }
      }
    ]
  };
  return (
    <React.Fragment>
      <div className="packages-container">
        <h3>Popular Places</h3>
        <Slider {...settings}>
          {images.map((each) => (
            <div className="packages-img" key={each.id}>
              <img alt="img" src={each.img} />
            </div>
          ))}
        </Slider>
      </div>
    </React.Fragment>
  );
}

export default TrendingPackages;
