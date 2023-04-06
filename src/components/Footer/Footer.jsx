import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-main-container">
        <div>
          <div className="footer-logo">
            <h3>
              Bus <br />
              <span className="footer-span">Booking</span>
            </h3>
          </div>
          <div className="news-letter">
            <p>Subscribe our Newsletter</p>
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-resource">
          <h4>Resources</h4>
          <div className="imp-links">
            <Link>About Us</Link>
            <Link>Terms & Conditions</Link>
            <Link>customer Service</Link>
            <Link>Privacy Policy</Link>
            <Link>Refund Policy</Link>
          </div>
        </div>
        <div>
          <h4 className="imp-l">Important Links</h4>
          <div className="imp-links">
            <Link>Home</Link>
            <Link>Coupons</Link>
            <Link>Profile</Link>
            <Link>Guest</Link>
          </div>
        </div>

        <div>
          <h4 className="imp-l">Follow Us</h4>
          <div className="imp-links">
            <Link><i className="ri-instagram-line"></i> Instagram</Link>
            <Link><i className="ri-linkedin-fill"></i> Linkedin</Link>
            <Link><i className="ri-facebook-fill"></i> Facebook</Link>
            <Link><i className="ri-twitter-line"></i> Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
