import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="container nav">
        <div className="logo">
          <div className="logo-mark">
            <span>V</span>
          </div>
          <div>
            VRIDHI&nbsp;CONSULTANTS
            <span className="logo-subtitle">
              Tax • GST • ROC • Advisory
            </span>
          </div>
        </div>

        <nav className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Why Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>
        </nav>

        <div className="nav-cta">
          <div className="nav-phone">Call: +91-9458107394</div>
          <Link to="/contact" className="btn-outline">
            Request a callback
          </Link>
        </div>
      </div>
    </header>
  );
}

