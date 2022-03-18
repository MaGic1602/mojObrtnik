import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import helmet from "./assets/images/helmet.jpg";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // useEffect (() => {

  //     alert(click);
  // }, [click]);

  return (
    <>
      <div className="pretty-little-bar">
        Nikad lakše do posla!
        <Link to="/signup" className="nav-link2" onClick={closeMobileMenu}>
          Pridruži se
        </Link>{" "}
        našem timu stručnjaka u mojObrtnik
      </div>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="container-navbar-logo" onClick={handleClick}>
            <img className="logo-image" src={helmet}></img>{" "}
            <Link to="/" className="navbar-logo">
              mojObrtnik
            </Link>
          </div>
          <div className="container-navbar-links">
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              Početna
            </Link>
            <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
              O mojObrtnik
            </Link>
            <Link
              to="/dashboard"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Moj odabir
            </Link>
          </div>
        </div>
        <div className="navbar-right">
          <div className="container-navbar-links">
            <Link to="/signup" className="nav-link" onClick={closeMobileMenu}>
              Registracija
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
