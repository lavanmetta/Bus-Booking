import React from "react";

function ReadyToBook() {
  return (
    <React.Fragment>
      <div className="ready-container">
        <h3>One Click to Book</h3>
        <div className="table-container">
        <table borderd>
        <tr>
          <th>Routes</th>
          <th>Buses</th>
          <th>Price</th>
          <th></th>
        </tr>
        <tr>
          <td>Hyderabad to Bangalore</td>
          <td>Ac Garuda, NonAc SuperLuxury</td>
          <td>420/-Rs</td>
          <td><button>Book</button></td>
        </tr>
      </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ReadyToBook;
