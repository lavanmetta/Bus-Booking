import React from "react";
import { useState, useEffect } from "react";
import { seatAvailability } from "../Data/SeatDetails";

function SeatDetails() {
  const [available, setAvailability] = useState([]);

  useEffect(() => {
    const details = seatAvailability();
    setAvailability(details);
  }, []);

  return (
    <React.Fragment>
      <div className="available">

      {
        available.map((each) => 
        <div className="ava-container" key={each.id}>
          <h4>{each.name}</h4>
          {each.id === 'AVA' ?  <span class="material-symbols-outlined ava">chair</span> : ''}
          {each.id === 'BKD' ?  <span class="material-symbols-outlined bkd">chair</span> : ''}
          {each.id === 'SEL' ?  <span class="material-symbols-outlined sel">chair</span> : ''}
        </div>
        )
      }
        
      </div>
    </React.Fragment>
  );
}

export default SeatDetails;
