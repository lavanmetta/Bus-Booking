import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavbarLinks } from "../Data/Navbar";

import "./Navbar.css";
const links = NavbarLinks();

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

 
    const hamburgerHandle = () => {
      setToggle(prevState => !prevState);
    };
  
  return (
    <nav role="navigation">
      <div className="navbar-main-container">
        <div className="nav-logo">
          <h1>BusBooking</h1>
        </div>
        <button className="hamburger" onClick={hamburgerHandle}><i className='ri-menu-line nvt'></i></button>

        <div className={`nav-links ${toggle === true ? 'nav-link-a' : '' }`}>

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
