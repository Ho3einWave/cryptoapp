import React from "react";
import { Link } from "react-router-dom";
import "./nav-bar.styles.css";
export const NavBar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>|<Link to="about">About</Link>
  </nav>
);
