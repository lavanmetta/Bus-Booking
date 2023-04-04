import React from "react";
import { Link } from "react-router-dom";

function BookedDetails() {
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
                  <td>A1, A2, A3</td>
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
