

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <FaLaptopCode />
          TechNova
        </Link>
        <div className="nav-links">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </>
  )
}
export default Navbar;
