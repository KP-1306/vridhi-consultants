// src/components/Navbar.jsx

import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="container nav">
        {/* Brand / Logo */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <img
              src="/logo-vridhiconsultants.jpeg"
              alt="VridhI Consultants logo"
              className="logo-img"
            />
            <div className="logo-text">
              <div className="logo-title">VRIDHI CONSULTANTS</div>
              <span className="logo-subtitle">
                Tax • GST • ROC • Advisory
              </span>
            </div>
          </Link>
        </div>

        {/* Nav links */}
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

        {/* Right-side CTA */}
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
