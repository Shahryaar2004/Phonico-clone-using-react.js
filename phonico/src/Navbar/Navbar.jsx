import React from "react";
import "./Navbar.css";
import phonico_img from '../assets/phonico.webp';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      {/* Properly render the image */}
      <img src={phonico_img} alt="Phonico Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="login-button">Login</button>
        <button className="register-button">{props.buttonName}</button>
      </div>
    </nav>
  );
};

export default Navbar;
