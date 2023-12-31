import React from "react";
import logo from "../logo.png";
import { Link } from "react-scroll"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
    </button>
    <div className="navbar-collapse collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link smooth={true} to="home" className="nav-link text-center" href="#">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="about" offset={-110} className="nav-link text-center" href="#">about</Link>
        </li>
        {/* <li className="nav-item">
          <Link smooth={true} to="services" offset={-110} className="nav-link text-center" href="#">services</Link>
        </li> */} 
        <li className="nav-item">
          <Link smooth={true} to="portfolio" offset={-110} className="nav-link text-center" href="#">portfolio</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="skills" offset={-110} className="nav-link text-center" href="#">skills</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="experience" offset={-110} className="nav-link text-center" href="#">experience</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="contacts" offset={-110} className="nav-link text-center" href="#">contacts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
