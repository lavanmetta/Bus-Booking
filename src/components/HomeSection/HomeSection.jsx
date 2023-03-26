import React from "react";
import OfferCard from "../OfferCard/OfferCard";
import SearchCard from "../SearchCard/SearchCard";
import './HomeSection.css'
function HomeSection() {
  return (
    <React.Fragment>
      <OfferCard/>
      <SearchCard/>
    </React.Fragment>
  );
}

export default HomeSection;
