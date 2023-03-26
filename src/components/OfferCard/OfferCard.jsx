import React from "react";
import "./OfferCard.css";
function OfferCard() {
  return (
    <React.Fragment>
      <div className="offer-card-container">
        <div className="offer-heading">
          <h1>
            25% <span className="off">Off</span>
          </h1>
        </div>
        <div className="offer-para">
          <p>
            "Start your travel journey with BusBooking.com and save up to 250 on
            your first ticket booking! Don't miss this exclusive offer for new
            customers."
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OfferCard;
