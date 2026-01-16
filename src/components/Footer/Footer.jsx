import React from "react";
import "../Footer/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://x.com" target="_blank" rel="noreferrer">X</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </nav>

      <p className="copyright">
        © 2026 Football Players. All rights reserved.
      </p>
    </footer>
  );
}
