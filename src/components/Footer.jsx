import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-inner">
        <div>© {year} VridhI Consultants. All rights reserved.</div>
        <div>
          <a href="#top">Back to top</a>
          &nbsp;•&nbsp;
          <span>vridhiconsultants.com</span>
        </div>
      </div>
    </footer>
  );
}

