import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <div className="jumbotron" style={{height: 50 + "%", marginBottom: 0 + "px", paddingBottom: 0 + "px"}}>
         <h1>Kayla Ann Kuhlman</h1>
                <h3>Full-Stack Web Developer</h3>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>

 
    </div>
  );
}

export default NavTabs;
