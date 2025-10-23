import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/smithlogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>

        {/* Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/work" onClick={() => setIsOpen(false)}>Our Work</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
