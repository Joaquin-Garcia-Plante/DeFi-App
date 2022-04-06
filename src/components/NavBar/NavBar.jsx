import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./NavBar.css";

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
            <a href="/">Platform</a>
          </li>
          <li className="nav-item">
            <a href="/">Developers</a>
          </li>
          <li className="nav-item">
            <a href="/">Community</a>
          </li>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="btn" href="/">
              Use Defi
            </a>
          </li>
        </ul>
        <div onClick={handleClick} className="hamburguer">
          {click ? (
            <AiOutlineClose className="icon"></AiOutlineClose>
          ) : (
            <AiOutlineMenu className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
