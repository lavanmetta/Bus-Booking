import React from "react";
import { useEffect, useState } from "react";
import { getReadyBookings } from "../Data/ReadyBook";

function ReadyToBook() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const ReadyBooking = getReadyBookings();
    setBookings(ReadyBooking);
  }, []);

  return (
    <React.Fragment>
      <div className="ready-container">
        <h3>One Click to Book</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Routes</th>
                <th>Buses</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((each) => (
                <tr key={each.id}>
                  <td>{each.route}</td>
                  <td>{each.bus}</td>
                  <td>{each.price}</td>
                  <td>
                    <button className="book">Book</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ReadyToBook;
