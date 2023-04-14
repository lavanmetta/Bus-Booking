import React from "react";
import { seatDetailsList } from "../Data/Seat";
import { useState, useEffect, createContext } from "react";
import "./Seat.css";
import SeatDetails from "./SeatDetails";
import Navbar from "../Navbar/Navbar";

export const Store = createContext();

function Seat() {
  const [seatDetails, SetSeatDetails] = useState([]);
  const [seatNum, setSeatNum] = useState([]);

  useEffect(() => {
    const details = seatDetailsList();
    SetSeatDetails(details);
  }, []);

  const seatHandler = (seatNumber) => {
    const updatedSeatDetails = seatDetails.map((seat) => {
      if (seat.seatNumber === seatNumber) {
        return {
          ...seat,
          isSelected: !seat.isSelected,
        };
      }
  
      return seat;
    });
  
    const selectedSeats = updatedSeatDetails.filter((seat) => seat.isSelected);
  
    setSeatNum(selectedSeats.length ? selectedSeats : []);
    SetSeatDetails(updatedSeatDetails);
  };
  
  

  return (
    <Store.Provider value={seatNum}>
      <React.Fragment>
        <Navbar />

        <div className="seat-container">
          <div className="seat-selection">
            {seatDetails.map((each) => (
              <div className="seat" key={each.id}>
                <span
                  className={`material-symbols-outlined ${
                    each.isAvailability ? "ava" : "bkd"
                  } ${
                    seatNum.some((seat) => seat.seatNumber === each.seatNumber)
                      ? "sel"
                      : "ava"
                  }`}
                  onClick={() => seatHandler(each.seatNumber)}
                >
                  chair
                </span>
              </div>
            ))}
          </div>
          <div className="seat-details">
            <SeatDetails />
          </div>
        </div>
      </React.Fragment>
    </Store.Provider>
  );
}

export default Seat;
