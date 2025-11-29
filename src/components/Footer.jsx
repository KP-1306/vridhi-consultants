// src/components/Footer.jsx

import React from "react";

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
        </div>
      </div>
    </footer>
  );
}
