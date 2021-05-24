import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";

export default () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
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
