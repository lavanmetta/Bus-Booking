import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useContext, useState } from 'react'
import { Store } from "./Seat";

function BookedDetails() {
  const [seats, setSeats] = useState([])
  const [seatNum] = useContext(Store)

  useEffect(() => {
    if (seatNum) {
      setSeats(prevSeats => [...prevSeats, seatNum]);
    }
  }, [seatNum]);
 


  return (
    <React.Fragment>
      <div>
        <h3>Booking Details :</h3>
        <div className="booking-details">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Selected Seats</th>
                  <th>Destination</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Karimnagar</td>
                  <td>Hyderabad</td>
                  <td>{seats && seats.map(seat => seat.seatNumber).join(', ')}</td>
                  <td>Hyderabad</td>
                  <td>234/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="check-out">
          <div className="terms-box">
            <input type="checkbox" />
            <span>*By clicking this, Continue with payment process, read terms and conditions here <Link>Terms & Conditions</Link> and <Link>Privacy & Agreement</Link>  </span>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BookedDetails;
