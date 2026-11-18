
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2>TechNova IT Solutions</h2>
      <p>Innovating Today, Building Tomorrow.</p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/career">Career</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p>© 2026 TechNova IT Solutions. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
