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
  const [select, setSelected] = useState('ava');

  useEffect(() => {
    const details = seatDetailsList();
    SetSeatDetails(details);
  }, []);

const seatHandler = (seatNumber) => {
   const seatNumbers = seatDetails.filter((eachSeat) => eachSeat.seatNumber === seatNumber)
   setSeatNum(seatNumbers)
   setSelected('sel')
   console.log(select)
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
              <span className={`material-symbols-outlined ${each.seatNumber === seatNum[0]?.seatNumber ? 'sel' : 'ava'}`}  onClick={() => seatHandler(each.seatNumber)}>chair</span>
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
