import React from "react";
import "./SearchCard.css";
import arrows from "../Assets/exchange.png";

const SearchCard = () => {
  return (
    <div className="search">
      <div className="search-card-container">
        <input type="search" placeholder="From" />
        <img src={arrows} alt="arrow" />
        <input type="search" placeholder="to" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchCard;
