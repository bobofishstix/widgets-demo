import React from "react";
import './styles/ttt-buttons.css';
import './styles/ttt-box.css';

export const Box = (props) => {
  return (
    <button className="ttt_board" onClick={props.onClick}>
      {!props.value && <div className="placeholder">x</div>}
      {props.value && <div> {props.value}</div>}
    </button>
  );
};
