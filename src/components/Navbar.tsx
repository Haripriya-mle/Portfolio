import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

interface NavbarProps {
  name: string;
  logo: string;
}

const Navbar: React.FC<NavbarProps> = ({ name, logo }) => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
     
      <Link to="/" className="logo d-flex align-items-center">
          <img src={logo} alt="Logo" width="50" height="50" className="me-2" />
          <h1 className="sitename">{name}</h1>
        </Link>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Navbar;
