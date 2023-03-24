import React from "react";
import { NavbarImages } from "../Data/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Navbar.css";

const images = NavbarImages();

function NavImg() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="nav-img-container">
      <Slider {...settings}>
        <div className="img-container">
          <div className="img-para">
            <h1 className="img-p1">
              "Don't miss your ride, book your bus tickets with ease and
              convenience on BusBooking.com today!"
            </h1>
          </div>
          <img className="nav-img" src={images[1]} alt="nav" />
        </div>
        <div className="img-container">
          <div className="img-para">
            <h1 className="img-p2">
              "Travel is always more fun with friends! Book your bus tickets and
              enjoy the journey together."
            </h1>
          </div>
          <img className="nav-img" src={images[2]} alt="nav" />
        </div>
        <div className="img-container">
          <div className="img-para">
            <h1 className="img-p3">
              "We take the safety and health of our passengers and employees
              seriously"
            </h1>
          </div>
          <img className="nav-img" src={images[0]} alt="nav" />
        </div>
      </Slider>
    </div>
  );
}

export default NavImg;
