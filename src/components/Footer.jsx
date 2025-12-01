// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-shell">
      <div className="container section-inner footer-bar">
        <div className="footer-copy">
          © {year} VridhI Consultants. All rights reserved.
        </div>

        <div className="footer-links">
          <a href="#top" className="footer-link">
            Back to top
          </a>
          <span className="footer-dot">•</span>
          <a
            href="https://vridhiconsultants.com"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            vridhiconsultants.com
          </a>
          <span className="footer-dot">•</span>
          <Link to="/service-agreement" className="footer-link">
            Service Agreement
          </Link>
          <span className="footer-dot">•</span>
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
          <span className="footer-dot">•</span>
          <Link to="/refund-policy" className="footer-link">
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
