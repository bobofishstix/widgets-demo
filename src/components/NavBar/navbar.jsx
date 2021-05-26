import "./navbar.css";
import React from "react";
// import placeholder from "./placeholder.jpg";
import tttpic from "./NavPics/TTT.jpg";
import eightballpic from "./NavPics/eightball.jpg";
import minesweeperpic from './NavPics/sweeper.jpg';
import homebutton from './NavPics/home.jpg'
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div>
        <a href='/home'><img className='home-button' src={homebutton} alt='Home Button' /></a>
      </div>
      <div className="widget-box">
        <header className="title"> Magic 8 Ball</header>
        <a href="/ball">
          <img className="widget-preview" src={eightballpic} alt="Eight Ball Pic" />
        </a>
      </div>
      <div className="widget-box">
        <header className="title"> Tic-Tac-Toe</header>
        <a href="/ttt">
          <img className="widget-preview" alt="Tic-Tac-Toe Pic" src={tttpic} />
        </a>
      </div>
      <div className="widget-box">
        <header className="title"> Minesweeper</header>
        <a href="/minesweeper">
          <img className="widget-preview" alt="Minesweeper Pic" src={minesweeperpic} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
