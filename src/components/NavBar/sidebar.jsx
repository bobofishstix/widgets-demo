import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";

function Sidebar () {
  return (
    
    <Menu>
      <h1 className="heading">Wacky Widget Warehouse</h1>
      <a className="menu-item" href="/home">
        Home
      </a>
      <a className="menu-item" href="/ball">
        Magic 8 Ball
      </a>
      <a className="menu-item" href="/ttt">
        Tic-Tac-Toe
      </a>
      <a className="menu-item" href="/minesweeper">
        Minesweeper
      </a>
    </Menu>
  );
};

export default Sidebar;