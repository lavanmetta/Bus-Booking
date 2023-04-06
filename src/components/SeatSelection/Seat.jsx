import React from "react";
import { seatDetailsList } from "../Data/Seat";
import { useState, useEffect, createContext } from "react";
import "./Seat.css";
import SeatDetails from "./SeatDetails";
import Navbar from "../Navbar/Navbar";

export const Store = createContext()

function Seat() {
  const [seatDetails, SetSeatDetails] = useState([]);
  const [seatNum, setSeatNum] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const details = seatDetailsList();
    SetSeatDetails(details);
  }, []);

  const seatHandler = (seatNumber) => {
    const updatedSeatDetails = seatDetails.map((seat) => {
      if (seat.seatNumber === seatNumber) {
        return {
          ...seat,
          isAvailability: !seat.isAvailability 
        };
        
      }
      
      return seat;

    });
    const seatNumbers = updatedSeatDetails.filter((eachSeat) => eachSeat.seatNumber === seatNumber)
    setSeatNum(seatNumbers);
    SetSeatDetails(updatedSeatDetails);
  }
  
 


  return (
    <Store.Provider value={seatNum}>
    <React.Fragment>
      <div>
        <Navbar />
      </div>

      <div className="seat-container">
        <div className="seat-selection">
          {seatDetails.map((each) => (
            <div className="seat" key={each.id} >
            <span className={`material-symbols-outlined ${each.isAvailability ? 'ava' : 'sel'}`} onClick={() => seatHandler(each.seatNumber)}>chair</span>
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
