import React from "react";
import { Link } from "react-router-dom";
import { NavbarLinks } from "../Data/Navbar";

import "./Navbar.css";
const links = NavbarLinks();

const Navbar = () => {
  return (
    <nav role="navigation">
      <div className="navbar-main-container">
        <div className="nav-logo">
          <h1>BusBooking</h1>
        </div>
        <div className="nav-links">
          {links.map(({ link, LinkName }) => (
            <Link to={link} key={LinkName}>
              {LinkName}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
