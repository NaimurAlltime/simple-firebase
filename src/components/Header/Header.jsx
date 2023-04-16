import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <ul className="nav-item">
        <Link className="link-item" to="/">
          Home
        </Link>
        <Link className="link-item" to="/about">
          About
        </Link>
        <Link className="link-item" to="/contact">
          Contact
        </Link>
      </ul>
      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>
    </div>
  );
};

export default Header;
