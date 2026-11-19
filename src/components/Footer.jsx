
import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <h2>TechNove It Solutions</h2>
      <p>innovating Toadys ,buid tommorrow</p>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/career">Career</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  )
}
export default Footer;