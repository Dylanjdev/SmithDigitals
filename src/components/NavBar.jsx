import { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/smithlogo-small.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setIsGuidesOpen(false);
  }, []);

  const toggleMenu = () => {
    if (isOpen) setIsGuidesOpen(false);
    setIsOpen((wasOpen) => !wasOpen);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 960) closeMenu();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [closeMenu, isOpen]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img
            src={logo}
            alt="Smith Digitals Logo"
            className="nav-logo-img"
            width="512"
            height="512"
          />
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
            onClick={closeMenu}
          >
            Capabilities
          </NavLink>
          <NavLink
            to="/case-studies"
            className={({ isActive }) => (isActive ? "nav-active" : undefined)}
            onClick={closeMenu}
          >
            Case Studies
          </NavLink>
          <div className={`nav-guide-menu ${isGuidesOpen ? "is-open" : ""}`}>
            <div className="nav-guide-heading">
              <NavLink
                to="/guides/how-to-rank-on-google-for-free"
                className={({ isActive }) => (isActive ? "nav-active" : undefined)}
                onClick={closeMenu}
              >
                Guides
              </NavLink>
              <button
                type="button"
                className="nav-guide-toggle"
                aria-expanded={isGuidesOpen}
                aria-controls="guide-navigation"
                aria-label={isGuidesOpen ? "Hide guide links" : "Show guide links"}
                onClick={() => setIsGuidesOpen((wasOpen) => !wasOpen)}
              >
                <span className="nav-guide-chevron" aria-hidden="true">⌄</span>
              </button>
            </div>
            <div id="guide-navigation" className="nav-guide-dropdown" role="menu">
              <Link to="/guides/how-to-rank-on-google-for-free" role="menuitem" onClick={closeMenu}>
                How to rank on Google for free
              </Link>
              <Link to="/guides/local-seo-vs-regular-seo" role="menuitem" onClick={closeMenu}>
                Local SEO vs. regular SEO
              </Link>
              <Link to="/guides/what-is-responsive-web-design" role="menuitem" onClick={closeMenu}>
                Responsive web design guide
              </Link>
              <Link to="/guides/how-to-structure-your-website-for-seo-growth" role="menuitem" onClick={closeMenu}>
                Website structure for SEO
              </Link>
              <Link to="/guides/lee-county-cumberland-gap-tourism" role="menuitem" onClick={closeMenu}>
                Cumberland Gap tourism guide
              </Link>
              <Link to="/blog/lee-county-economic-outlook" role="menuitem" onClick={closeMenu}>
                Lee County economic outlook
              </Link>
            </div>
          </div>
          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? "nav-active" : undefined)}
            onClick={closeMenu}
          >
            Engagements
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-portal-link"
            onClick={closeMenu}
          >
            Start a project ↗
          </NavLink>
        </div>

        {isOpen && <button type="button" className="nav-backdrop" onClick={closeMenu} aria-label="Close navigation menu" />}
      </div>
    </nav>
  );
}
