import React from "react";
import "./SearchCard.css";
import arrows from "../Assets/exchange.png";
import ReadyToBook from "../Home/ReadyToBook";

const SearchCard = () => {
  return (
    <div className="search">
      <div className="search-card-container">
        <input type="search" placeholder="Enter Source" />
        <img src={arrows} alt="arrow" />
        <input type="search" placeholder="Enter Destination" />
        <button>Search</button>
      </div>
      <div>
        <ReadyToBook />
      </div>
    </div>
  );
};

export default SearchCard;
