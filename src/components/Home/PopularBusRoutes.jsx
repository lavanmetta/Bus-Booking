import React from "react";
import { Link } from "react-router-dom";
import { popularBusList } from "../Data/Popular";
import { useEffect, useState } from "react";
function PopularBusRoutes() {
  const [bus, setBus] = useState([]);
  useEffect(() => {
    const buses = popularBusList();
    setBus(buses);
  }, []);
  return (
    <React.Fragment>
      <div className="popular-routes-container">
        <div>
          <h4>Popular Bus Routes</h4>
        </div>
        <div className="popular-card-container">
          {bus.map((each) => (
            <div className="popular" key={each.id}>
              <div className="city-name-container">
                <i className="ri-bus-fill"></i>
                <h3>{each.city}</h3>
              </div>
              <div className="city-links">
                {each.Links.map((link) => (
                  <Link key={link} to={`/${link.toLowerCase()}`}>
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default PopularBusRoutes;
