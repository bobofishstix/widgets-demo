import React from "react";

export const Box = (props) => {
  return (
    <button className="ttt_board" onClick={props.onClick}>
      {!props.value && <div className="placeholder">x</div>}
      {props.value && <div> {props.value}</div>}
    </button>
  );
};
