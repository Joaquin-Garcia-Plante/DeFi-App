import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./NavBar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  // Estado que se va a encargar de mostrar el menú desplegable
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div className="container">
        <h1 style={{ marginLeft: "1rem", color: "#00d8ff" }}>Defi</h1>
        <ul className={click ? "nav active" : "nav"}>
          <li className="nav-item">
            <Link activeClass="active" to="platform" spy={true} smooth={true} offset={50} duration={500}>
              Platform
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" to="developers" spy={true} smooth={true} offset={50} duration={500}>
              Developers
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" to="community" spy={true} smooth={true} offset={50} duration={500}>
              Community
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <a className="btn" href="/">
              Use Defi
            </a>
          </li>
        </ul>
        <div onClick={handleClick} className="hamburguer">
          {click ? <AiOutlineClose className="icon"></AiOutlineClose> : <AiOutlineMenu className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
