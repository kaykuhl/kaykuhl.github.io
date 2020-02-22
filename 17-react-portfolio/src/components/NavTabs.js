import React from "react";
import { Link } from "react-router-dom";
// import { Nav } from 'react-bootstrap'

function NavTabs() {
  return (
    <div className="jumbotron" style={{height: 50 + "%", marginBottom: 0 + "px", paddingBottom: 0 + "px"}}>
         <h1>Kayla Ann Kuhlman</h1>
                <h3>Full-Stack Web Developer</h3>



    <ul className="nav">
      <li className="nav-item">
        <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/skills"
          className={window.location.pathname === "/skills" ? "nav-link active" : "nav-link"}
        >
          Skills
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

 <hr></hr>
    </div>
  );
}

export default NavTabs;
