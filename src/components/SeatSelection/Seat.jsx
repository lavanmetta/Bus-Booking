import React from "react";
import { seatDetailsList } from "../Data/Seat";
import { useState, useEffect } from "react";
import "./Seat.css";
import SeatDetails from "./SeatDetails";
import Navbar from "../Navbar/Navbar";

function Seat() {
  const [seatDetails, SetSeatDetails] = useState([]);

  useEffect(() => {
    const details = seatDetailsList();
    SetSeatDetails(details);
  }, []);

  return (
    <React.Fragment>
      <div>
        <Navbar />
      </div>

      <div className="seat-container">
        <div className="seat-selection">
          {seatDetails.map((each) => (
            <div className="seat">
              <span class="material-symbols-outlined">chair</span>
            </div>
          ))}
        </div>
        <div className="seat-details">
          <SeatDetails />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Seat;
