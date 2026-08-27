import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/smithlogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Smith Digitals Logo" className="nav-logo-img" />
          <span className="nav-brand">
            <span className="nav-logo-text">Smith Digitals</span>
            <span className="nav-logo-meta">Independent digital studio</span>
          </span>
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
          <p className="nav-menu-label">Explore Smith Digitals</p>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "nav-active" : undefined)}
            onClick={() => setIsOpen(false)}
          >
            Capabilities
          </NavLink>
          <NavLink
            to="/case-studies"
            className={({ isActive }) => (isActive ? "nav-active" : undefined)}
            onClick={() => setIsOpen(false)}
          >
            Case Studies
          </NavLink>
          <div className="nav-guide-menu">
            <NavLink
              to="/guides/how-to-rank-on-google-for-free"
              className={({ isActive }) => (isActive ? "nav-active" : undefined)}
              onClick={() => setIsOpen(false)}
              aria-haspopup="true"
            >
              Guides <span className="nav-guide-chevron" aria-hidden="true">⌄</span>
            </NavLink>
            <div className="nav-guide-dropdown" role="menu">
              <Link to="/guides/how-to-rank-on-google-for-free" role="menuitem" onClick={() => setIsOpen(false)}>
                How to rank on Google for free
              </Link>
              <Link to="/guides/local-seo-vs-regular-seo" role="menuitem" onClick={() => setIsOpen(false)}>
                Local SEO vs. regular SEO
              </Link>
              <Link to="/guides/lee-county-cumberland-gap-tourism" role="menuitem" onClick={() => setIsOpen(false)}>
                Cumberland Gap tourism guide
              </Link>
              <Link to="/blog/lee-county-economic-outlook" role="menuitem" onClick={() => setIsOpen(false)}>
                Lee County economic outlook
              </Link>
            </div>
          </div>
          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? "nav-active" : undefined)}
            onClick={() => setIsOpen(false)}
          >
            Engagements
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-portal-link"
            onClick={() => setIsOpen(false)}
          >
            Start a project ↗
          </NavLink>
        </div>

        {isOpen && <button type="button" className="nav-backdrop" onClick={() => setIsOpen(false)} aria-label="Close navigation menu" />}
      </div>
    </nav>
  );
}
