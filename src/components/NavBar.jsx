import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/smithlogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const clientPortalUrl = "https://billing.stripe.com/p/login/3cI9AT0gE5lK695bCB14400";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Smith Digitals Logo" className="nav-logo-img" />
         <span className="nav-logo-text">Smith Digitals</span>
        </Link>

        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </button>

        <div id="primary-navigation" className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/case-studies" onClick={() => setIsOpen(false)}>Case Studies</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <a
            href={clientPortalUrl}
            className="nav-portal-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Client Portal
          </a>
        </div>

        {isOpen && <button type="button" className="nav-backdrop" onClick={() => setIsOpen(false)} aria-label="Close navigation menu" />}
      </div>
    </nav>
  );
}
