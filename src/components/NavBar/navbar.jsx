import "./navbar.css";
import React from "react";
import placeholder from "./placeholder.jpg";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="widget-box">
        <header className="title"> Magic 8 Ball</header>
        <a href="/ball">
          <img className="widget-preview" src={placeholder} alt="" />
        </a>
      </div>
      <div className="widget-box">
        <header className="title"> Tic-Tac-Toe</header>
        <a href="/ttt">
          <img className="widget-preview" alt="" src={placeholder} />
        </a>
      </div>
      <div className="widget-box">
        <header className="title"> Minesweeper</header>
        <a href="/minesweeper">
          <img className="widget-preview" alt="" src={placeholder} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
